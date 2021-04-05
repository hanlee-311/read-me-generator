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
  * [Installation Instructions](#installationInfo)
  * [Usage Information](#)
  * [Contribution Guidelines](*)
  * [Test Instructions](*)
  * [Contact Information](*)

  # Description
  >${data.description}

  # Installation Instructions
  >${data.installationInfo}

  # Usage Information
  >${data.usageInfo}

  # Contribution Guidelines
  >${data.contributionInfo}

  # Test Instructions 
  >${data.testInfo}

  # Contact Information
  >${data.contactInfo}

  -${data.githubUsername}
  -${data.email}
`;
}

module.exports = generateMarkdown;
