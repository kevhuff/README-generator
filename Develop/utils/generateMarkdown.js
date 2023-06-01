// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache)";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)";
    default:
      return "";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "## License\n\nThis project is licensed under the MIT License.";
    case "Apache":
      return "## License\n\nThis project is licensed under the Apache License 2.0.";
    case "GPLv3":
      return "## License\n\nThis project is licensed under the GPLv3 License.";
    default:
      return "";
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

${licenseSection}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or inquiries, please contact me via:

- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
