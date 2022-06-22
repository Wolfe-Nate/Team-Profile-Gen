const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const teamArray = [];
// import generateHTML
const generateHTML = require("./src/generateHTML");

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "engineerOfficeNumber",
        message: "What is the engineer's Github username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      createTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internOfficeNumber",
        message: "What school did they go to?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          init();
      }
    });
}

function init() {
  fs.writeFileSync(distPath, generateHtml(teamMembers), "utf-8");
}

managerPrompt();
