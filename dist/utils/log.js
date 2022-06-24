"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHelpScreen = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
function displayHelpScreen() {
    console.log([
        "",
        chalk_1.default.bold("Usage:"),
        "  $ fe                 " + chalk_1.default.dim("Select from a list of available generators"),
        "  $ fe <name>          " + chalk_1.default.dim("Run a generator registered under that name"),
        "  $ fe <name> [input]  " + chalk_1.default.dim("Run the generator with input data to bypass prompts"),
        "",
        chalk_1.default.bold("Options:"),
        "  -h, --help             " + chalk_1.default.dim("Show this help display"),
        "  -t, --show-type-names  " + chalk_1.default.dim("Show type names instead of abbreviations"),
        "  -i, --init             " + chalk_1.default.dim("Generate a basic plopfile.js"),
        "  -v, --version          " + chalk_1.default.dim("Print current version"),
        "  -f, --force            " + chalk_1.default.dim("Run the generator forcefully"),
        "  -d, --dir              " + chalk_1.default.dim("Enter folder path"),
        "",
        chalk_1.default.dim(" ------------------------------------------------------"),
        "",
        "",
        chalk_1.default.bold("Examples:"),
        "  $ " + chalk_1.default.blue("fe"),
        "  $ " + chalk_1.default.blue("fe table"),
        "  $ " + chalk_1.default.blue("fe table base-table"),
        "  $ " + chalk_1.default.blue("fe table base-table userList --dir src/pages"),
        "",
    ].join("\n"));
}
exports.displayHelpScreen = displayHelpScreen;
