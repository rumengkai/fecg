import autocompletePrompt from "inquirer-autocomplete-prompt";
import { resolve } from "path";
import { NodePlopAPI } from "plop";
import { cwdPath } from "../utils";

const plopList: PlopList = require("../templates/data.json");

// 根据配置文件中的 plopList 生成 plop Generator
export default function (plop: NodePlopAPI) {
  plop.setPrompt("autocomplete", autocompletePrompt);
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
          path: `${resolve(cwdPath("{{name}}/" + path.join("/")))}`,
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

export type PlopList = PlopItem[];

export type PlopItem = {
  name?: string;
  description?: string;
  templateFiles?: string[]; // 模板文件，数组形式，可以写多个文件。
  children?: PlopItem[];
};
