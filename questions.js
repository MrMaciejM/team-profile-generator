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
  ]),
  (engQuestions = [
    {
      type: "input",
      name: "name",
      message: "Enter Engineer's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter Engineer's id",
    },
    {
      type: "input",
      name: "email",
      message: "Enter Engineer's email address",
    },
    {
      type: "input",
      name: "github",
      message: "Enter Engineer's github",
    },
  ]),
  (internQuestions = [
    {
      type: "input",
      name: "name",
      message: "Enter intern's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter intern's id",
    },
    {
      type: "input",
      name: "email",
      message: "Enter intern's email address",
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern's school name",
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
