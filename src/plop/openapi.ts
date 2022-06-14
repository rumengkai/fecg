import { resolve } from "path";
import { NodePlopAPI } from "plop";
import { cwdPath } from "../utils";

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
  function openapiGenerator(_config) {
    console.log("~~~ _config", _config);
    const { generateService } = require("openapi3-ts-generator");
    const fecgConfig = require(resolve(cwdPath("fecg.config")));
    if (!fecgConfig.openapi) {
      console.log("请在fecg.config.js中配置openapi");
      return;
    }
    generateService(fecgConfig.openapi);
  }
}
