import chalk from "chalk";

export function displayHelpScreen() {
  console.log(
    [
      "",
      chalk.bold("Usage:"),
      "  $ fe                 " +
        chalk.dim("Select from a list of available generators"),
      "  $ fe <name>          " +
        chalk.dim("Run a generator registered under that name"),
      "  $ fe <name> [input]  " +
        chalk.dim("Run the generator with input data to bypass prompts"),
      "",
      chalk.bold("Options:"),
      "  -h, --help             " + chalk.dim("Show this help display"),
      "  -t, --show-type-names  " +
        chalk.dim("Show type names instead of abbreviations"),
      "  -i, --init             " + chalk.dim("Generate a basic plopfile.js"),
      "  -v, --version          " + chalk.dim("Print current version"),
      "  -f, --force            " + chalk.dim("Run the generator forcefully"),
      "",
      chalk.dim(" ------------------------------------------------------"),
      "",
      "",
      chalk.bold("Examples:"),
      "  $ " + chalk.blue("fe"),
      "  $ " + chalk.blue("fe table"),
      "  $ " + chalk.blue('fe table userList'),
      "",
    ].join("\n")
  );
}
