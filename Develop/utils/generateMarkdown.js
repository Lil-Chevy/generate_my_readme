// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const badgeUrl =
    "![license](https://img.shields.io/badge/License-" +
    `${license}` +
    "-yellow.svg)";
  return badgeUrl.replace(/ /g, "_");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == "GNU GPLv3") {
    return `https://opensource.org/licenses/GPL-3.0`;
  } else if (license == "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "Boost Software") {
    return `https://opensource.org/licenses/BSL-1.0`;
  } else {
    return `https://opensource.org/licenses/MPL-2.0`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == "GNU GPLv3") {
    return `https://opensource.org/licenses/GPL-3.0`;
  } else if (license == "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "Boost Software") {
    return `https://opensource.org/licenses/BSL-1.0`;
  } else {
    return `https://opensource.org/licenses/MPL-2.0`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("<<<<<<DATA>>>>", data);
  console.log("<<<<>>> LICESNE>>>><<<", data.license);
  console.log(
    "<<<<>>> renderLicenseLink>>>><<<",
    renderLicenseLink(data.license)
  );

  return `# ${data.title}


  ## Description

  ${data.description}
 
  ## Table of Contents

  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation

  - ${data.installationInformation}

  ## Usage

  - ${data.usageInformation}
  
  ## License

  ${renderLicenseBadge(data.license)}

  - ${data.license}

  - ${renderLicenseLink(data.license)}

  ## Contributing

  - ${data.contributorInformation}

  ## Tests

  - ${data.testInformation}

  ### Questions

  -please feel free to use the information below to contact me with questions or concerns!

  - GitHub Link: https://github.com/${data.github}

  - Email: ${data.email}
`;
}

module.exports = { renderLicenseBadge, renderLicenseLink, generateMarkdown };
