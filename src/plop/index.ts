import { resolve } from "path";
import { NodePlopAPI } from "plop";
import { cwdPath } from "../utils";
const plopList: PlopList = require("../templates/data.json");

// 根据配置文件中的 plopList 生成 plop Generator
export default function (plop: NodePlopAPI) {
  let plopTplList = plopList.filter((e) => e.templateFiles);
  plopTplList.map((e) => {
    const actions = e.templateFiles.map((file) => {
      let path = file.replace("templates/", "").replace(".hbs", ".tsx").split("/");
      path.shift();
      return {
        type: "add",
        path: `${resolve(cwdPath("{{name}}/" + path.join("/")))}`,
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

export type PlopList = {
  name?: string;
  description?: string;
  templateFiles?: string[]; // 模板文件，数组形式，可以写多个文件。
}[];
