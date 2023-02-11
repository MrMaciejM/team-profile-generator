const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// guthub = guthub username
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    //console.log(this.github);
    //return this.github;
    return this.gitHubUser;
  }
}

const e = new Engineer("Alice", 2, "myMail@mail", "alicegithub");
console.log(e.getGithub());
