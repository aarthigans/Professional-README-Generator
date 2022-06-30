// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your title? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub Username? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your repository. (Required)",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Please enter your description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide step-by-step installation instructions for your project. (Required)",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter your installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter your use instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "Unlicense",
    ],
  },
  {
    type: "confirm",
    name: "confirmContributers",
    message: "Would you like to allow other developers to contribute?",
    default: true,
  },
  {
    type: "input",
    name: "contribute",
    message: "Please provide guidelines for contributing. (Required)",
    when: ({ confirmContributers }) => {
      if (confirmContributers) {
        return true;
      } else {
        return false;
      }
    },
    validate: (contributerInput) => {
      if (contributerInput) {
        return true;
      } else {
        console.log("Please enter contributer guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to test the app. (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter your use test instructions!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init();
