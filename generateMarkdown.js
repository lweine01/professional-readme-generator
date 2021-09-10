const generateMarkdown = (answers) => {
  return `# ${answers.title}
${renderLicenseBadge(answers.license)}
  
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

${renderLicenseSection(answers.license)}

## Questions
[Link to GitHub Profile](https://github.com/${answers.github})<br/>
Please email me at ${answers.email} with any additional questions.
`;
}

module.exports = generateMarkdown;

renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT": 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "IPL 1.0":
      return  `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    case "MPL 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    default:
      return
  }
}

renderLicenseLink = (license)=> {
  switch (license) {
    case "MIT": 
      return `https://opensource.org/licenses/MIT`
    case "IPL 1.0":
      return  `https://opensource.org/licenses/IPL-1.0`
    case "MPL 2.0":
      return `https://opensource.org/licenses/MPL-2.0`
    default:
      return
  }
}

renderLicenseSection = (license) => {
  if(license ==='MIT' || license ==='IPL 1.0' || license ==='MPL 2.0') {
    return `## License
Link to your license [${license}](${renderLicenseLink(license)})
${renderLicenseBadge(license)}`
  } else {
    return ``;
  }
}