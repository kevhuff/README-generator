// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  // Add more questions here...
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file created successfully!');
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate markdown based on user answers
      const markdown = generateMarkdown(answers);

      // Write markdown to README file
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
