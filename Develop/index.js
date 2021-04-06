// TODO: Include packages needed for this application
// Completed: Downloaded Inquierer
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Please write a description of your project.", "What are the installation instructions?", "What is the usage information?", "What are the contribution guidelines?", "What are the test instructions?", "Please choose a license for your application.", "Enter your Github username.", "What is your email address?", "Please explain how someone can reach you."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([{
        type: 'input',
        message: questions[0],
        name: 'title',
        },
        {
         type: 'input',
         message: questions[1],
         name: 'description',   
        },
        {
        type: 'input',
        message: questions[2],
        name: 'installationInfo'
        },
        {
        type: 'input',
        message: questions[3],
        name: 'usageInfo',
        },
        {
        type: 'input',
        message: questions[4],
        name: 'contributionInfo',
        },
        {
        type: 'input',
        message: questions[5],
        name: 'testInfo',
        },
        {
        type: 'list',
        message: questions[6],
        name: 'license',
        choices: [{
            name: 'MIT',
            value: 'MIT',
        },
        {
            name: 'Apache 2.0',
            value: 'Apache%202.0',
        },
        {
            name: 'GPL 3.0',
            value: 'GPL%203.0',
        },
        {
            name: 'BSD 3',
            value: 'BSD%203',
        },
        {
            name: 'none',
            value: 'none'
        }
        ]
        },
        {
        type:'list',
        message:'What year was this project made?',
        name: 'year',
        choices: [{
            name:'2020',
            value:'2020',
        },
        {
            name: '2021',
            value: '2021',
        },
        {
            name:'2022',
            value:'2022',
        }
        ]
        },
        {
        type: 'input',
        message: questions[7],
        name: 'githubUsername',
        },
        {
        type: 'input',
        message: questions[8],
        name: 'email',
        },
        {
        type: 'input',
        message: questions[9],
        name: 'contactInfo',
        }
    ])
    .then((response) => {
        console.log(response)
        writeToFile('README.md', generateMarkdown(response));
    });
}

// Function call to initialize app
init();

