"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const util_1 = require("../util");
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
    function openapiGenerator(_config) {
        console.log("~~~ _config", _config);
        const { generateService } = require("openapi3-ts-generator");
        const fecgConfig = require((0, path_1.resolve)((0, util_1.cwdPath)("fecg.config")));
        if (!fecgConfig.openapi) {
            console.log("请在fecg.config.js中配置openapi");
            return;
        }
        generateService(fecgConfig.openapi);
    }
}
exports.default = default_1;
