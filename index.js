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
  //console.log(mgrQuestions[4]);
  return inquirer.prompt(mgrQuestions).then((mgrData) => {
    // prettier-ignore
    const newManager = new Manager(mgrData.name,mgrData.id,mgrData.email,mgrData.officeNumber);
    const addEng = "Add an engineer";
    const addInt = "Add an intern";
    const finish = "Finish building the team";

    if (mgrData.addEmployee === finish) {
      result.push(newEngineer);
      fs.writeFile("team.html", render(result), (error) => {
        error ? console.log(error) : "team created";
      });
    }

    function addMoreEmployees() {
      return inquirer.prompt(addPersonnel).then((data) => {
        //
        //console.log(data);
        if (data.addEmployee == addEng) {
          //
          return inquirer.prompt(engQuestions).then((engData) => {
            // prettier-ignore
            const newEngineer = new Engineer(engData.name,engData.id,engData.email,engData.github);

            result.push(newEngineer);
            fs.writeFile("team.html", render(result), (error) => {
              error ? console.log(error) : "team created";
            });
            return data;
          });
        } else {
          return addMoreEmployees();
        }
      });
    }
    addMoreEmployees();

    //console.log(mgrData);
    //console.log(mgrData.addEmployee);
  }); // end of then(data)
  //
} // end of init()
init();

//prompt to add another employee
// inquirer.prompt(addPersonnel).then((data) => {
//   //console.log();
//   function askUserRepeatedly() {
//     if (data.addEmployee === addEng) {
//       // return this promise...
//       return inquirer.prompt(engQuestions).then((engData) => {
//         // ...
//         // prettier-ignore
//         const newEngineer = new Engineer(engData.name,engData.id,engData.email,engData.github);
//         result.push(newEngineer);
//         fs.writeFile("team.html", render(result), (error) => {
//           error ? console.log(error) : "team created";
//         });
//       });
//     }
//   }

//   // ...so it can be fed into the parent chain
//   return askUserRepeatedly();

// Add Engineer
//   if (data.addEmployee === addEng) {
//     inquirer.prompt(engQuestions).then((engData) => {
//       // prettier-ignore
//       const newEngineer = new Engineer(engData.name,engData.id,engData.email,engData.github);
//       result.push(newEngineer);
//       fs.writeFile("team.html", render(result), (error) => {
//         error ? console.log(error) : "team created";
//       });
//       //
//     }); // end of engQuestions promise
//   } // end of it statement
//

//=============================
//console.log(addPersonnel[1]);

// if (mgrData.addEmployee == finish) {
//   result.push(newManager);
//   fs.writeFile("team.html", render(result), (error) => {
//     error ? console.log(error) : "team created";
//   });
// }

// function to loop and add employees
// let addMore = true;
// function addMoreEmplyees() {

// }

// if (mgrData.addEmployee === addEng) {
//   for (let i = 0; i < 1; ) {
//     inquirer.prompt(engQuestions).then((engData) => {
//       // prettier-ignore
//       const newEngineer = new Engineer(engData.name,engData.id,engData.email,engData.github);

//       result.push(newManager, newEngineer);
//       fs.writeFile("team.html", render(result), (error) => {
//         error ? console.log(error) : "team created";
//       });

//       // set to ask question again
//       //
//     }); // inquirer.then close function
//   }
// }

//
///});
//}
//init();

/*
//NOTE: mgrData must be pushed into an array (which is result), because of the map in page-template.js file. Otherwise you will get TypeError.
    result.push(newManager);

    const createHtml = render(result);
    fs.writeFile("team.html", createHtml, (error) => {
      error ? console.log(error) : "team created";
    });

*/

// =================
