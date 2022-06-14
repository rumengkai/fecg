import { resolve } from "path";
import { NodePlopAPI } from "plop";
import { cwdPath } from "../utils";

export default function (plop: NodePlopAPI) {
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
        path: `${resolve(cwdPath("{{name}}/index.tsx"))}`,
        templateFile: "../templates/form/index.hbs",
      },
    ],
  });
}
