// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// ![Static Badge](https://img.shields.io/badge/:"mit-blue, github-yellow")
// create if function to iterate through color tyoes for licencse
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title 
  ${data.project_title}
## Description 
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Licsense
${data.license}
## Contributions
${data.contribution}
## Questions
Find my Github at ${data.github}. Feel free to reach me at ${data.email} to discuss any questions you may have!
`;
}

module.exports = generateMarkdown;
