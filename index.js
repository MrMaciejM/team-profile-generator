const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const questions = require("./questions");
// importing questions and inquirer prompts
// TODO: Write Code to gather information about the development team members, and render the HTML file.

// create objects for each team member
// when a user starts application then they are prompted to enter the team manager creds
//console.log(engQuestions);
function init() {
  inquirer.prompt(mgrQuestions).then((mgrData) => {
    const newManager = new Manager(
      mgrData.name,
      mgrData.id,
      mgrData.email,
      mgrData.officeNumber
    );

    render(newManager);

    //console.log(generateTeam);
    //console.log(mgrData);
    //console.log(newManager);

    //inquirer.prompt(choices).then((employeeData) => {
    //
    //console.log(employeeData);
    //});
  });
}
init();
