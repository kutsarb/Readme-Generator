const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const axios = require("axios")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "title",
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
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions"
    },

];

// function to write README file


// function to initialize program
function init() {
    inquirer.prompt(questions) // .then function
        .then(function (data) {
            const queryUrl = `https://api.github.com/users/${data.username}`;

            axios.get(queryUrl).then(function (res) {
                writeToFile()

            });
        });
    // call the function writeToFile using the data that we pass (ie the inquirer responses)
};

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};
// function call to initialize program
init();
