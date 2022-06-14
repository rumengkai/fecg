#!/usr/bin/env node

import minimist from "minimist";
import path from "path";
import { Plop, run } from "plop";
const args = process.argv.slice(2);
const argv = minimist(args);

Plop.launch(
  {
    cwd: argv.cwd,
    // In order for `plop` to always pick up the `plopfile.js` despite the CWD, you must use `__dirname`
    configPath: path.join(__dirname, "plopfile.js"),
    require: argv.require,
    completion: argv.completion,
    // This will merge the `plop` argv and the generator argv.
    // This means that you don't need to use `--` anymore
  },
  run as any
);
