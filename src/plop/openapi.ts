import { resolve } from "path";
import { NodePlopAPI } from "plop";
import { cwdPath } from "../utils";

function openapiGenerator(_config) {
  console.log("~~~ _config", _config);
  const { generateService } = require("openapi3-ts-generator");
  const fecgConfig = require(cwdPath("fecg.config"));
  if (!fecgConfig.openapi) {
    console.log("请添加配置文件 fecg.config.js 并配置 openapi 相关信息");
    return;
  }
  generateService(fecgConfig.openapi);
}

export default function (plop: NodePlopAPI) {
  plop.setGenerator("openapi", {
    description: "根据swagger openapi3 生成 server",
    prompts: [],
    actions: [
      {
        type: "openapiGenerator",
        data: { name: "openapi" },
      },
    ],
  });
  plop.setActionType("openapiGenerator", function (_answers, config) {
    openapiGenerator(config.data);
    return "";
  });
}
