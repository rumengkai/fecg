"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const utils_1 = require("../utils");
function default_1(plop) {
    plop.setGenerator("table", {
        description: "基础表格",
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
                path: `${(0, path_1.resolve)((0, utils_1.cwdPath)("{{name}}/index.tsx"))}`,
                templateFile: "../templates/table/index.hbs",
            },
        ],
    });
}
exports.default = default_1;
