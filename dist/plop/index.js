"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const utils_1 = require("../utils");
const plopList = require("../templates/data.json");
// 根据配置文件中的 plopList 生成 plop Generator
function default_1(plop) {
    let plopTplList = plopList.filter((e) => e.templateFiles);
    plopTplList.map((e) => {
        const actions = e.templateFiles.map((file) => {
            let path = file.replace("templates/", "").replace(".hbs", ".tsx").split("/");
            path.shift();
            return {
                type: "add",
                path: `${(0, path_1.resolve)((0, utils_1.cwdPath)("{{name}}/" + path.join("/")))}`,
                templateFile: file,
            };
        });
        plop.setGenerator(e.name, {
            description: e.description,
            prompts: [{ type: "input", name: "name", message: "请输入名称：" }],
            actions,
        });
    });
}
exports.default = default_1;
