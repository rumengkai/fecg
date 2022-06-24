// plop 模板
import { resolve } from "path";
import { NodePlopAPI } from "plop";
import { cwdPath } from "../utils";

export default function (plop: NodePlopAPI) {
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
        path: cwdPath("{{name}}/index.tsx"),
        templateFile: "templates/table/index.hbs",
      },
    ],
  });
}
