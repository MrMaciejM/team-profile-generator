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
let result = [];

function init() {
  inquirer.prompt(mgrQuestions).then((mgrData) => {
    const newManager = new Manager(
      mgrData.name,
      mgrData.id,
      mgrData.email,
      mgrData.officeNumber
    );
    const createHtml = render(result);
    const addEng = "Add an engineer";
    const addInt = "Add an intern";
    const finish = "Finish building the team";

    if (mgrData.choices === addEng) {
      inquirer.prompt(engQuestions).then((engData) => {
        result.push(engData);
        fs.writeFile("team.html", createHtml, (error) => {
          error ? console.log(error) : "team created";
        });
      });
    }

    //inquirer.prompt(choices).then((employeeData) => {
    //
    //console.log(employeeData);
    //});
  });
}
init();

/*
//NOTE: mgrData must be pushed into an array (which is result), because of the map in page-template.js file. Otherwise you will get TypeError.
    result.push(newManager);

    const createHtml = render(result);
    fs.writeFile("team.html", createHtml, (error) => {
      error ? console.log(error) : "team created";
    });

*/
