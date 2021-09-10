const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be used to install dependensies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What info would be helpful for users to be able to contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run test?'
    },
    {
        type: 'rawlist',
        name: 'license',
        choices: ['MIT', 'IPL 1.0', 'MPL 2.0', 'None'],
        message: "What type of license do you like to use?"
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address would you like to be contacted at?'
    }
  ]

inquirer
  .prompt(questions)
  .then((response) => {
    generateMarkdown(response);
      
    fs.writeFile('GENREADME.md', generateMarkdown(response), 'utf-8', (err) => {
        err ?  console.log (err): console.log('File successfully created! Great Work.')
    });
  });
