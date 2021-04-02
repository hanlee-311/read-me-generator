// TODO: Include packages needed for this application
// Completed: Downloaded Inquierer
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Please write a description of your project.", "What are the installation instructions?", "What is the usage information?", "What are the contribution guidelines?", "What are the test instructions?", "Please choose a license for your application.", "Enter your Github username.", "What is your email address?", "Please explain how someone can reach you."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([{
        type: 'input',
        message: questions[0],
        name: 'Name',
        },
        {
         type: 'input',
         message: questions[1],
         name: 'Description',   
        },
        {
        type: 'input',
        message: questions[2],
        name: 'Usage-Info',
        },
        {
        type: 'input',
        message: questions[3],
        name: 'Contribtuion-Info',
        },
        {
        type: 'input',
        message: questions[4],
        name: 'Test-Info',
        },
        {
        type: 'input',
        message: questions[6],
        name: 'Github-username',
        },
        {
        type: 'input',
        message: questions[7],
        name: 'Email',
        },
        {
        type: 'input',
        message: questions[8],
        name: 'Contact-Info',
        }
    ])
    .then((response) =>
        {console.log(response)
        let answers = JSON.stringify(response);
        fs.writeFile('log.txt', answers, (err) =>
        err ? console.log(err) : console.log('Success!')
        )
    });
}

// Function call to initialize app
init();

