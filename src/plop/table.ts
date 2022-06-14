import { resolve } from "path";
import { NodePlopAPI } from "plop";
import { cwdPath } from "../utils";

export default function (plop: NodePlopAPI) {
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
        path: `${resolve(cwdPath("{{name}}/index.tsx"))}`,
        templateFile: "../templates/table/index.hbs",
      },
    ],
  });
}
