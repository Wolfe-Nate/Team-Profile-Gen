const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

function employeePrompt() {
  inquirer.prompt([
    {
      type: "input",
      name: "employeeName",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is the employee's ID?",
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "employeeRole",
      message: "What is the employees Role?",
    },
  ]);
}
