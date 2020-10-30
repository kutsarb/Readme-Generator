const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generate = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide any licensing"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions"
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide a way someone with questions can reach out"
    },

];


// function to initialize program
function init() {
    inquirer.prompt(questions)
        // .then function
        .then(function (res) {

            fs.writeFile("README.md", generate(res, path), function (err) {
                if (err) {
                    throw err;
                    
                };
                console.log("Great success! You have Readme")
            });
        });
};
// function call to initialize program
init();
