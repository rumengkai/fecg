"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function openapiGenerator(_config) {
    console.log("~~~ _config", _config);
    const { generateService } = require("openapi3-ts-generator");
    const fecgConfig = require((0, utils_1.cwdPath)("fecg.config"));
    if (!fecgConfig.openapi) {
        console.log("请添加配置文件 fecg.config.js 并配置 openapi 相关信息");
        return;
    }
    generateService(fecgConfig.openapi);
}
function default_1(plop) {
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
exports.default = default_1;
