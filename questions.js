const inquirer = require("inquirer");

// Manager's questions
const questions = [
  (mgrQuestions = [
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
      message: "Enter team manager's email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter team manager's number",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Choose one of the following:",
      choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    },
  ]),
  (engQuestions = [
    {
      type: "input",
      name: "name",
      message: "Enter Engineer's name",
    },
  ]),
];

module.exports = questions;
//module.exports = mgrQuestions;
//module.exports = engQuestions;
//module.exports = mgrQuestions;

/*
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
