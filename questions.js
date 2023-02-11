const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Manager's questions
function managerQuestions() {
  inquirer.prompt([
    const test = new Manager(); 
  ]);
}

module.exports = managerQuestions;

/*
{
      type: "input",
      name: "name",
      message: "Enter team manager's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter team manager's ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter team manager's email address",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter team manager's office number",
    },
*/
