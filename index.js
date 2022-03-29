


// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [

  {
    type: "input",
    message: "What's the name of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Project description.",
    name: "description"
  },
  {
    type: "input",
    message: "Installation instructions",
    name: "installation"
  },
  {
    type: "input",
    message: "Usage information",
    name: "usageInfo"
  },
  {
    type: "input",
    message: "Contribution guidelines",
    name: "contribution"
  },
  {
    type: "input",
    message: "Test instructions",
    name: "testInstructions"
  },
  {
    type: "input",
    message: "GitHub username",
    name: "gitHub"
  },
  {
    type: "input",
    message: "Email address",
    name: "email"
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.log(err);
    }
  }) 
}


// TODO: Create a function to initialize app
async function init() {
  inquirer.prompt(questions)
  .then((data) => generateMarkdown(data))
  .then (()=> writeToFile("README.md", `${generateMarkdown}`))


}

// Function call to initialize app
init();























// // TODO: Include packages needed for this application
// const inquirer = require("inquirer");
// const fs = require("fs");

// const generateMarkdown = require("./utils/generateMarkdown.js")

// // TODO: Create an array of questions for user input
// const questions = [
//   {
//     type: "input",
//     message: "What's the name of your project?",
//     name: "title"
//   },
//   {
//     type: "input",
//     message: "Project description.",
//     name: "description"
//   },
//   {
//     type: "input",
//     message: "Installation instructions",
//     name: "installation"
//   },
//   {
//     type: "input",
//     message: "Usage information",
//     name: "usageInfo"
//   },
//   {
//     type: "input",
//     message: "Contribution guidelines",
//     name: "contibution"
//   },
//   {
//     type: "input",
//     message: "Test instructions",
//     name: "testInstructions"
//   },
//   {
//     type: "input",
//     message: "GitHub username",
//     name: "gitHub"
//   },
//   {
//     type: "input",
//     message: "Email address",
//     name: "email"
//   },

// ];

// // TODO: Create a function to write README file
// function writeToFile() {
//   fs.writeFile("README.md", `${generateMarkdown}`, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   })
// }

// // TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions)
//   .then((response) => generateMarkdown(response))
//   // .then((response) => {
//   //   generateMarkdown(response)
//   // })
//   .then(() => {writeToFile("README.md", generateMarkdown)})



  
// }

// // Function call to initialize app
// init();

