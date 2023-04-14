//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');

//Creates an array of questions for user input
const questions = [ 
    {
    type: 'input',
    message: "What is your project title",
    name: 'title',
    default: 'myproject',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid Title is required.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "What is your project description",
    name: 'description',
    default: 'description about my project',

},
{
    type: 'input',
    message: "Describe the steps required to install your project",
    name: 'installation'
},
{
    type: 'input',
    message: "Describe the necessary usage information.",
    name: 'usageInformation'
},
{
    type: 'input',
    message: "What are the steps to contribute to the project?",
    name: 'contribution'
},
{
    type: 'input',
    message: "describe the steps to test the project.",
    name: 'tests'
},
{
    type: 'list',
    message: "what license does this fall under?",
    name: 'license',
    choices:["Apache","Creative Commons","MIT","GNU"]
},
{
    type: 'input',
    message: "What is your github username",
    name: 'username',
    default: 'SSteelCommander',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid Username is required.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "What is your email",
    name: 'email',
    default: 'natericc@gmail.com',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid email is required.");
        }
        return true;
    }
},

];

//function that writes README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data,error => {
    if (error){
        return console.log(error);

    }
    console.log("generated")
})

}

//initialize app
async function init() {
    try {

        const answers = await inquirer.prompt(questions);
        console.log("Answers provided ", answers);
    
        markdown = generateMarkdown(answers);
        console.log(markdown);

    
        // Write markdown to file
        writeToFile('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
