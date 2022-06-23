"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_autocomplete_prompt_1 = tslib_1.__importDefault(require("inquirer-autocomplete-prompt"));
const path_1 = require("path");
const utils_1 = require("../utils");
const plopList = require("../templates/data.json");
// 根据配置文件中的 plopList 生成 plop Generator
function default_1(plop) {
    plop.setPrompt("autocomplete", inquirer_autocomplete_prompt_1.default);
    plopList.map((e) => {
        let prompts = [];
        // 如果有 children,则需要选择对应的 children
        if (e.children && e.children.length) {
            prompts.push({
                type: "autocomplete",
                name: "tplName",
                message: "请选择：",
                source: (_answersSoFar, input) => {
                    return e.children
                        .filter((ee) => ee.name.includes(input || ""))
                        .map((e) => `${e.name}: ${e.description}`);
                },
            });
        }
        prompts.push({ type: "input", name: "name", message: "请输入名称：" });
        const actions = (item, prefix) => {
            return item.templateFiles.map((file) => {
                const path = file.replace(`templates/${prefix}/`, "").replace(".hbs", ".tsx").split("/");
                return {
                    type: "add",
                    path: `${(0, path_1.resolve)((0, utils_1.cwdPath)("{{name}}/" + path.join("/")))}`,
                    templateFile: file,
                };
            });
        };
        plop.setGenerator(e.name, {
            description: e.description,
            prompts,
            actions: (data) => {
                if (data.tplName) {
                    let tpl_name = data.tplName.split(":")[0];
                    let item = e.children.find((e) => e.name === tpl_name);
                    return actions(item, e.name + "/" + tpl_name);
                }
                return actions(e, e.name);
            },
        });
    });
}
exports.default = default_1;
