// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}
## Description
${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation Instructions
${data.installation}
## Usage Information
${data.usageInfo}
## Contribution Guidelines
${data.contribution}
## Test Instructions
${data.testInstructions}
## Questions
If you have questions about the code you can reach out to me through GitHub at [${data.gitHub}](https://github.com/${data.gitHub})
or you can email me at [${data.email}](mailto:${data.email})`;

  
}


module.exports = generateMarkdown;
