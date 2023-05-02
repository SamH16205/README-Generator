// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    "None" : " ",

    "Apache License 2.0" : "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",

    "GNU General Public License v3.0" : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",

    "MIT License" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",

    "BSD 2-Clause 'Simplified' License" : "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)", 

    "BSD 3-Clause 'New' or 'revised' License" : "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", 

    "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",

    "Creative Commons Zero v1.0 Universal": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    
    "Eclipse Public License" : "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",

    "GNU Affero General Public License 3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",

    "GNU General Public License" : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",

    "GNU Lesser General Public License" : "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",

    "Mozilla Public License 2.0" : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",

    "The Unlicense" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"

  }
  if (license){
    return licenses[license]
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    "None" : " ",

    "Apache License 2.0" : "https://opensource.org/licenses/Apache-2.0",

    "GNU General Public License v3.0" : "https://www.gnu.org/licenses/gpl-3.0",

    "MIT License" : "https://opensource.org/licenses/MIT",

    "BSD 2-Clause 'Simplified' License" : "https://opensource.org/licenses/BSD-2-Clause", 

    "BSD 3-Clause 'New' or 'revised' License" : "https://opensource.org/licenses/BSD-3-Clause", 

    "Boost Software License 1.0": "https://www.boost.org/LICENSE_1_0.txt",

    "Creative Commons Zero v1.0 Universal": "http://creativecommons.org/publicdomain/zero/1.0/",
    
    "Eclipse Public License" : "https://opensource.org/licenses/EPL-1.0",

    "GNU Affero General Public License 3.0": "https://www.gnu.org/licenses/agpl-3.0",

    "GNU General Public License" : "https://www.gnu.org/licenses/gpl-3.0",

    "GNU Lesser General Public License" : "https://www.gnu.org/licenses/lgpl-3.0",

    "Mozilla Public License 2.0" : "https://opensource.org/licenses/MPL-2.0",

    "The Unlicense" : "http://unlicense.org/"

  }
if (license){
  return licenses[license]
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license)
  const link = renderLicenseLink(license)
  return `# License
  ${badge} ${link}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##  Table of Contents 
   - [Description](#desc) 
   - [Installation](#ins)
   - [Usage](#use)
   - [Contribution Guidlines](#con) 
   - [Test Instructions](#test)
   - [Questions/Contact](#ques)
   - [License](#license) 
  
  
  # Description <a id="desc"></a>
  ${data.description}
  
  # Installation <a id="ins"></a>
  ${data.installation}
  
  # Usage <a id="use"></a>
  ${data.usage}
  
  # Contribution Guidelines <a id="con"></a>
  ${data.conGuide}
  
  # Test Instructions <a id="test"></a>
  ${data.testIns}
  
  # Questions/Contact <a id="ques"></a>
  <a href="https://github.com/${data.github}"> GitHub: ${data.github} </a>
  <br>
  Email: ${data.email}

  ${renderLicenseSection(data.license)} 
  <a id="license"></a>
  `
  ;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}