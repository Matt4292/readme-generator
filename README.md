function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
    ## Description
    ${data.description}
    ## Installation Instructions
    ${data.installation}
    ## Usage Information
    ${data.usageInfo}
    ## Contribution Guidelines
    ${data.contribution}
    ## Test Instructions
    ${data.testInstructions}
    ## GitHub Username
    ${data.gitHub}
    ## Email Address
    ${data.email}`;


}