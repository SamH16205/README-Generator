// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const GenerateMarkdown = require('./utils/generateMarkdown.js')

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
      choices : ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License", "GNU Affero General Public License 3.0", "GNU General Public License", "GNU Lesser General Public License", "Mozilla Public License 2.0", "The Unlicense"]
    },
  ])
  .then((response) => 
    writeToFile("generatedREADME.md", GenerateMarkdown.generateMarkdown(response))
)
}

// Function call to initialize app
init()
