const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, description, installation, usage, license, contributing, tests, userName, email }) =>
  ` # ${title}
by ${userName}
${license}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${tests}
## Questions
For any follow up questions feel free to reach out to
${userName}
${email}`;

inquirer
  .prompt([
    {
      message: 'Press ENTER to continue...',
      name: 'enterKey',
    },
    {
      type: "input",
      name: "title",
      message: "Please name your project.",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please list any installation instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please list any usage information.",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project.",
      choices: ["MIT", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please list any additional contributors to your project.",
    },
    {
      type: "input",
      name: "tests",
      message: "Please explain how to test your project.",
    },
    {
      type: "input",
      name: "userName",
      message: "Please provide your github username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email address.",
    },
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('succesfully created readme.md!')
  );
});

  // Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  // In questions section, GitHub username with link to github profile, email address also added for additional questions