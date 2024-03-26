
function generateMarkdown(data) {  //Creating a function to render all the prompted questions
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
https://choosealicense.com/licenses/${data.license}/
## Contributions
${data.contribution}
## Questions
Find my Github at https://github.com/${data.github}. Feel free to reach me at ${data.email} to discuss any questions you may have!
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
