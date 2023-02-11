// TODO: Write code to define and export the Employee class

class Employee {
  constructor(id, name, email) {
    //this.id = id;
    this.name = name;
    //this.email = email;
  }
  getId() {
    this.id = id;
  }
  getName() {
    return name;
  }
  getEmail() {
    this.email = email;
  }
  getRole() {
    return "Employee";
  }
}
const name = "Alice";
const e = new Employee(name);
console.log(e);
module.exports = Employee;
