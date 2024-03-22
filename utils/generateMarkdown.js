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
  // after description ## table of contents refernce markdown thing.
  return `# Title 
  ${data.project_title}
  ## Table of Contents
  1.[Despcription](README.md#Description)
  2.[Installation](README.md#Installation)
  3.[Usage](README.md#Usage)
  4.[License](README.md#License)
  5.[Contributions](README.md#Contributions)
  6.[Questions](README.md#Questions)
  7.[Tests](README.md#Test)
## Description 
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributions
${data.contribution}
## Questions
Find my Github at ${data.github}. Feel free to reach me at ${data.email} to discuss any questions you may have!
##Tests
${data.test}
`;
}

module.exports = generateMarkdown;
