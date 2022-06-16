#!/usr/bin/env node

import minimist from "minimist";
import path from "path";
import { Plop, run } from "plop";
import { displayHelpScreen } from "./utils/log";
const args = process.argv.slice(2);
const argv = minimist(args);

if (argv.help || argv.h) {
  displayHelpScreen(); // 输出帮助文档
  process.exit(0);
}
console.log('~~~ argv.cwd', argv.cwd)
Plop.launch(
  {
    cwd: argv.cwd,
    configPath: path.join(__dirname, "plopfile.js"),
    require: argv.require,
    completion: argv.completion,
  },
  (env) => {
    const options = { ...env };
    return run(options, undefined, true);
  }
);
