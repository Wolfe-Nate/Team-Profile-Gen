// name id email getName()
// getId() getEmail() getRole() returns Manager
// office number

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, number) {
    super(name, id, email);
    this.number = number;
  }
  getNumber() {
    return this.number;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;