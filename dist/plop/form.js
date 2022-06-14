"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const util_1 = require("../util");
function default_1(plop) {
    // component generator
    plop.setGenerator("form", {
        description: "表单页面",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "请输入文件名称：",
            },
        ],
        actions: [
            {
                type: "add",
                path: `${(0, path_1.resolve)((0, util_1.cwdPath)("{{name}}/index.tsx"))}`,
                templateFile: "../templates/form/index.hbs",
            },
        ],
    });
}
exports.default = default_1;
