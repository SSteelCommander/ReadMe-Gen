// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license =="Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license =="Creative Commons"){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  if (license =="GNU"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license =="MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## table of contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage Information](#usage)
  *[Contribution](#contribution)
  *[Testing](#tests)
  *[Questions](#questions)


  ## Description
  *Project Description*

  ${data.description}


  ## Installation
  *How to install the project*

  ${data.installation}


  ## Usage
  *How to use the project*

  ${data.usageInformation}


  ## Contribution
  *How to contribute to the project*

  ${data.contribution}


  ## Tests
  *Unit tests*

  ${data.tests}

  ## Questions
  *General questions*

  github.com/${data.username}

  You can send me an email at ${data.email}

  ## License
  *License used*

  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
