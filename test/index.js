var inquirer = require("inquirer");
const inquirerPrompt = require("inquirer-autocomplete-prompt");

inquirer.registerPrompt("autocomplete", inquirerPrompt);
inquirer
  .prompt([
    {
      type: "autocomplete",
      name: "from",
      message: "Select a state to travel from",
      source: (answersSoFar, input) => {
        console.log("~~~ answersSoFar, input", answersSoFar, input);
        return ['1212','122333'];
      },
    },
  ])
  .then((answers) => {
    console.log("~~~ answers", answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
