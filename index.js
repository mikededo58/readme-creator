// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");
// TODO: Create an array of questions for user input
// for every question create a object
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What is your Project Title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project Description",
  },
  {
    type: "input",
    name: "installation",
    message: "What is this installation for the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this Usage for the project?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who were the contributiors for the project?",
  },
  {
    type: "list",
    message: "What License would you like to add?",
    name: "license",
    choices: ["MIT", "Mozilla", "GUN GPLv3", "The Unlicesnse"],
  },
  {
    type: "list",
    message: "What color would you like the badge for your license to be?",
    name: "color",
    choices: ["Blue", "Green", "Yellow", "Red"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your github URL?",
  },
  {
    type: "input",
    name: "email",
    message: "What is an email people can reach you at?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests did you run",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // create the readme file
  fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("Succes!")
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
