// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch (license) {
    // "MIT",
    case "MIT":
      // link
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    // "GNU GPLv3",
    case "GNU GPLv3":
      // link
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    // "APACHE 2.0",
    case "APACHE 2.0":
      // link
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    // "Boost Software",
    case "Boost Software":
      // link
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
    // "Mozilla Public",
    case "Mozilla Public":
      // link
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    case " ":
      return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    // "MIT",
    case "MIT":
      // link
      return "https://opensource.org/licenses/MIT";
    // "GNU GPLv3",
    case "GNU GPLv3":
      // link
      return "https://www.gnu.org/licenses/gpl-3.0";
    // "APACHE 2.0",
    case "APACHE 2.0":
      // link
      return "https://opensource.org/licenses/Apache-2.0";
    // "Boost Software",
    case "Boost Software":
      // link
      return "https://www.boost.org/LICENSE_1_0.txt";
    // "Mozilla Public",
    case "Mozilla Public":
      // link
      return "https://opensource.org/licenses/MPL-2.0";

    case " ":
      return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Purpose

  ${data.descriptionInput}
  ## Licensing

  ${renderLicenseBadge(data.license)}
  ${data.license}

  ## Questions

  - GitHub Link: https://github.com/${data.github}

  ## Test
  - ${data.testInformation}

  ## Contributors

  - ${data.contributors}

  ### Contact

  -please feel free to reach out to me!
  -${data.email}
`;
}

module.exports = { renderLicenseBadge, renderLicenseLink, generateMarkdown };
