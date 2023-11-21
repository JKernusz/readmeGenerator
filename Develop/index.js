// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "link",
        message: "What is your deployed application URL?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "screenshot",
        message: "What is your screenshot URL?"
    },
    {
        type: "input",
        name: "creator",
        message: "What is your GitHub username?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["None", "Apache 2.0", "GNU 3.0", "MIT", "Mozilla 2.0", "Boost 1.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "features",
        message: "What features would you like to include?"
    },
    {
        type: "input",
        name: "require",
        message: "What dependencies would you like to include?"
    },
    {
        type: "input",
        name: "usage",
        message: "How would you like to use this application?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who would you like to contribute?"
    },
    {
        type: "input",
        name: "test",
        message: "How would you like to test this application?"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => writeToFile("README.md", generateMarkdown(responses))
    )};

// Function call to initialize app
init();
