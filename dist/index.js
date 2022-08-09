#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const minimist_1 = tslib_1.__importDefault(require("minimist"));
const path_1 = tslib_1.__importDefault(require("path"));
const plop_1 = require("plop");
const log_1 = require("./utils/log");
const update_1 = require("./utils/update");
const args = process.argv.slice(2);
const argv = (0, minimist_1.default)(args);
if (argv.version || argv.v) {
    console.log(process.env.npm_package_version);
}
else if (argv.help || argv.h) {
    (0, log_1.displayHelpScreen)(); // 输出帮助文档
}
else if (argv.update || argv.u) {
    (0, update_1.updateTemplates)(); // 更新模板库
}
else {
    plop_1.Plop.launch({
        cwd: argv.cwd,
        configPath: path_1.default.join(__dirname, "plopfile.js"),
        require: argv.require,
        completion: argv.completion,
    }, (env) => {
        const options = Object.assign({}, env);
        return (0, plop_1.run)(options, undefined, true);
    });
}
