const Employee = require("../lib/Employee");

test("Can we pull the name from the Employee constructor", () => {
  const emp = "tina";
  const employee = new Employee(emp);
  expect(employee.name).toBe(emp);
});

//type of new employee is an object
test("Can we pull the Id of the Employee from the Constructor", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});
