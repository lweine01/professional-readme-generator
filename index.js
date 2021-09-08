const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
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
        choices: ['MIT', 'IPL 1.0', 'MPL 2.0'],
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
  ])
  .then((answers) => {
      const readMeFile = 
      `
# ${answers.title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license}

## Questions
[Link to GitHub Profile](https://github.com/${answers.github})<br/>
Please email me at ${answers.email} with any additional questions.
      `;

    fs.writeFile('README.md', readMeFile, (err) => {
         err ?  console.log (err): console.log('File successfully created! Great Work.')
    });
  });
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
