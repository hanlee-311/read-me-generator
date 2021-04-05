// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return `This project is unlicensed.`;
  } else {
    return `![Badge](https://img.shields.io/badge/license-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  # Description
  >${data.description}

  # Installation
  >${data.installationInfo}

  # Usage
  >${data.usageInfo}

  # License
  >

  # Contributing
  >${data.contributionInfo}

  # Tests 
  >${data.testInfo}

  # Questions
  >${data.contactInfo}

  - GitHub: [${data.githubUsername}](github.com/${data.githubUsername})

  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
