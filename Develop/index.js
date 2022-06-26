// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {
  renderLicenseBadge,
  renderLicenseLink,
  generateMarkdown,
} = require("./utils/generateMarkdown");
// const questions = [];

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your Project?(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your Project Title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please a description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installationInformation",
    message: "Provide some information on how to install your app",
    validate: (installationInformation) => {
      if (installationInformation) {
        return true;
      } else {
        console.log("Please enter installation information for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Please provide usage information on your app",
    validate: (usageInformation) => {
      if (usageInformation) {
        return true;
      } else {
        console.log("Please enter usage information for your project!");
        return false;
      }
    },
  },
  {
    type: "github",
    name: "github",
    message: "Please enter your GitHub Username.",
    validate: (github) => {
      if (github) {
        return true;
      } else {
        console.log("Please enter your Username!");
        return false;
      }
    },
  },
  {
    type: "email",
    name: "email",
    message: "Please enter your Email for contact information",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
  {
    type: "usage",
    name: "usageInformation",
    message:
      "Please detail the projects features, interface, caveats/ anything a user needs to solve problems (usage section)",
    validate: (usageInformation) => {
      if (usageInformation) {
        return true;
      } else {
        console.log("Please enter the usage for your project!");
        return false;
      }
    },
  },
  {
    type: "test",
    name: "testInformation",
    message: "Please detail Test Instructions for your current project",
    validate: (testInformation) => {
      if (testInformation) {
        return true;
      } else {
        console.log("Please enter the test sequence for your project!");
        return false;
      }
    },
  },

  {
    type: "list",
    name: "license",
    message: "What license would you like to add to the README file?",
    choices: [
      "MIT",
      "GNU GPLv3",
      "APACHE 2.0",
      "Boost Software",
      "Mozilla Public",
    ],
  },
  {
    type: "contributors",
    name: "contributorInformation",
    message: "Please list all contributors",
    validate: (contributorInformation) => {
      if (contributorInformation) {
        return true;
      } else {
        console.log("Please enter the usage for your project!");
        return false;
      }
    },
  },
];

//function to write README file
function writeToFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./utils/README.md", fileName, (err) => {
      console.log("QUESTIONS ARRAY!", questions);
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created!",
      });
    });
  });
}

// function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((data) => generateMarkdown(data))
    .then((text) => writeToFile(text));
}

// Function call to initialize app
init();
