"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_autocomplete_prompt_1 = tslib_1.__importDefault(require("inquirer-autocomplete-prompt"));
const minimist_1 = tslib_1.__importDefault(require("minimist"));
const utils_1 = require("../utils");
const plopList = require("../templates/data.json");
const args = process.argv.slice(2);
const argv = (0, minimist_1.default)(args);
// 根据配置文件中的 plopList 生成 plop Generator
function default_1(plop) {
    plop.setPrompt("autocomplete", inquirer_autocomplete_prompt_1.default);
    const generalPlopList = plopList.filter((e) => e.isGeneral);
    generalPlopList.map((e) => {
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
        prompts.push({ type: "input", name: "name", message: "请输入名称：", default: "fe-" + e.name });
        // 如果检测到命令中有dir参数，则加入文件路径参数
        if (argv.dir || argv.d) {
            prompts.push({ type: "input", name: argv.dir ? "dir" : "d", message: "请输入路径：" });
        }
        const actionsFun = (item, prefix) => {
            return item.templateFiles.map((file) => {
                const path = file
                    .replace(`templates/${prefix}/`, "")
                    .replace(".hbs", item.suffix || ".tsx")
                    .split("/");
                let fileName = path.join("/");
                let resPath = "";
                // 如果产物没有文件夹，则替换模板文件名为参数 name 的值
                if (item.isFolder === false) {
                    resPath = (0, utils_1.cwdPath)(argv.dir || argv.d || "", "{{name}}." + fileName.split(".").pop());
                }
                else {
                    resPath = (0, utils_1.cwdPath)(argv.dir || argv.d || "", "{{name}}", fileName);
                }
                return {
                    type: "add",
                    path: resPath,
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
                    return actionsFun(item, e.name + "/" + tpl_name);
                }
                return actionsFun(e, e.name);
            },
        });
    });
}
exports.default = default_1;
