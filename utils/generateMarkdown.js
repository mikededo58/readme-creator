// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//

function renderLicenseLink(data) {
  if ((data.license = "MIT")) {
    return "https://choosealicense.com/licenses/mit/";
  } else if ((data.license = "Mozilla")) {
    return "https://choosealicense.com/licenses/mpl-2.0/";
  } else if ((data.license = "GUN GPLv3")) {
    return "https://choosealicense.com/licenses/gpl-3.0/)";
  } else {
    return "https://choosealicense.com/licenses/unlicense/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// https: function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title} 
  ![Static Badge](https://img.shields.io/badge/${data.license}-${data.color})
  ## Table of Contents
  1. [Despcription](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributions](#contributions)
  6. [Questions](#questions)
  7. [Tests](#test)
## Description 
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseLink(data.license)}
## Contributions
${data.contribution}
## Questions
Find my Github at ${data.github}. Feel free to reach me at ${
    data.email
  } to discuss any questions you may have!
##Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
