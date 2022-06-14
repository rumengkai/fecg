"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cwdPath = exports.mkdir = exports.getAbsolutePath = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importStar(require("path"));
const getAbsolutePath = (filePath) => {
    if (filePath && !path_1.default.isAbsolute(filePath)) {
        return path_1.default.join(process.cwd(), filePath);
    }
    return filePath;
};
exports.getAbsolutePath = getAbsolutePath;
const mkdir = (dir) => {
    if (!fs_1.default.existsSync(dir)) {
        (0, exports.mkdir)(path_1.default.dirname(dir));
        fs_1.default.mkdirSync(dir);
    }
};
exports.mkdir = mkdir;
const cwdPath = (name) => {
    return (0, path_1.resolve)(process.cwd(), name);
};
exports.cwdPath = cwdPath;
