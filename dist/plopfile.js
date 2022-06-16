"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = tslib_1.__importDefault(require("./plop/index"));
const openapi_1 = tslib_1.__importDefault(require("./plop/openapi"));
function default_1(plop) {
    (0, index_1.default)(plop);
    (0, openapi_1.default)(plop);
}
exports.default = default_1;
