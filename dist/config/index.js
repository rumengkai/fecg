"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATE_REPO = exports.TEMPLATE_DEST = exports.TEMPLATE_REPO_LOCAL_PATH = void 0;
const path = require("path");
exports.TEMPLATE_REPO_LOCAL_PATH = path.resolve(__dirname, "../../dist/repo");
exports.TEMPLATE_DEST = path.resolve(__dirname, "../../dist/templates");
exports.TEMPLATE_REPO = "direct:https://coding.jd.com/jd_smart_fe/fecg-templates#main";
