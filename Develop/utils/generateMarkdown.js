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
  switch (license) {
    // "MIT",
    case "MIT":
      // link
      return "https://opensource.org/licenses/MIT";
    // "GNU GPLv3",
    case "GNU GPLv3":
      // link
      return "https://opensource.org/licenses/GPL-3.0";
    // "APACHE 2.0",
    case "APACHE 2.0":
      // link
      return "https://opensource.org/licenses/Apache-2.0";
    // "Boost Software",
    case "Boost Software":
      // link
      return "https://opensource.org/licenses/BSL-1.0";
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
  console.log("<<<<<<DATA>>>>", data);
  console.log("render license link", renderLicenseLink(data.license));
  return `# ${data.title}
  ## Purpose

  ${data.description}

  ## Licensing

  ${renderLicenseBadge(data.license)}
  
  ${data.license}

  ${renderLicenseLink(data.license)}

  ## Questions

  - GitHub Link: https://github.com/${data.github}

  ## Test
  - ${data.testInformation}

  ## Contributors

  - ${data.contributorInformation}

  ### Contact

  -please feel free to reach out to me!
  -${data.email}
`;
}

module.exports = { renderLicenseBadge, renderLicenseLink, generateMarkdown };
