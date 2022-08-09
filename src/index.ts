#!/usr/bin/env node

import minimist from "minimist";
import path from "path";
import { Plop, run } from "plop";
import { displayHelpScreen } from "./utils/log";
import { updateTemplates } from "./utils/update";
const args = process.argv.slice(2);
const argv = minimist(args);

if (argv.version || argv.v) {
  console.log(process.env.npm_package_version);
} else if (argv.help || argv.h) {
  displayHelpScreen(); // 输出帮助文档
} else if (argv.update || argv.u) {
  updateTemplates(); // 更新模板库
} else {
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
}
