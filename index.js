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

const addPersonnel = {
  type: "list",
  name: "addEmployee",
  message: "Choose one of the following:",
  choices: ["Add an engineer", "Add an intern", "Finish building the team"],
};

function init() {
  // First, add Manager
  return inquirer.prompt(mgrQuestions).then((mgrData) => {
    // prettier-ignore
    const newManager = new Manager(mgrData.name,mgrData.id,mgrData.email,mgrData.officeNumber);
    const addEng = "Add an engineer";
    const addInt = "Add an intern";
    //const finish = "Finish building the team";

    result.push(newManager);
    fs.writeFile("team.html", render(result), (error) => {
      error ? console.log(error) : "";
    });

    // Add more employees/interns
    function addMoreEmployees() {
      return inquirer.prompt(addPersonnel).then((data) => {
        // Add engineer
        if (data.addEmployee == addEng) {
          inquirer.prompt(engQuestions).then((engData) => {
            // prettier-ignore
            const newEngineer = new Engineer(engData.name,engData.id,engData.email,engData.github);
            result.push(newEngineer);

            // save engineer output to file, adn re-run the questions with return addMoreEmployees()
            fs.writeFile("team.html", render(result), (error) => {
              error ? console.log(error) : "";
            });
            return addMoreEmployees();
          });
        }

        // Add intern
        if (data.addEmployee == addInt) {
          inquirer.prompt(internQuestions).then((intData) => {
            // prettier-ignore
            const newIntern = new Intern(intData.name,intData.id,intData.email,intData.school);
            result.push(newIntern);

            // save intern output to file, adn re-run the questions with return addMoreEmployees()
            fs.writeFile("team.html", render(result), (error) => {
              error ? console.log(error) : "";
            });
            return addMoreEmployees();
          });
        }
      });
    }
    addMoreEmployees();
  });
}
init();
