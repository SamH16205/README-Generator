// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown.js')
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = ["Application title:", "Application description:", "Application installation instructions:", "Application usage information:", "Application contribution guidelines:", "Application test instructions:", "Enter your GitHub username.", "Enter your email address.", "Please select an applicable license."];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=> 
  err? console.error(err) : console.log("Success"))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
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
      name: 'installation',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'conGuide',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'testIns',
    },
    {
      type: 'input',
      message: questions[6],
      name: 'github',
    },
    {
      type: 'input',
      message: questions[7],
      name: 'email',
    },
    {
      type: 'list',
      message: questions[8],
      name: 'license',
      choices : ["MIT", "UTA", "None"]
    },
  ])
  .then((response) => {
    console.log(response)
})
}

// Function call to initialize app
init()
