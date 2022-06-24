"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function default_1(plop) {
    plop.setGenerator("table2", {
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
                path: (0, utils_1.cwdPath)("{{name}}/index.tsx"),
                templateFile: "templates/table/index.hbs",
            },
        ],
    });
}
exports.default = default_1;
