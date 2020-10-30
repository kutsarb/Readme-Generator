// function passing in liscense as an arg
// validate lisense exists
// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${data.github}

  ## Project Name

  ${data.projectName}

  ## Description

  ${data.description}

  ## Table Of Contents

      [Description](#Description)
      [Installation](#Installation)
      [Usage](#Usage)
      [Licence](#Licence)
      [Contributors](#Contributors)
      [Test](#Test)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions

  ${data.questions}
  ${data.github}

`;
}

module.exports = generateMarkdown;
