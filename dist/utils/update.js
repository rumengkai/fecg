"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTemplates = void 0;
const tslib_1 = require("tslib");
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const ora_1 = tslib_1.__importDefault(require("ora"));
const _1 = require(".");
const config_1 = require("../config");
const updateTemplates = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const spinner = (0, ora_1.default)("Downloading template...");
    spinner.start();
    if (fs_extra_1.default.existsSync(config_1.TEMPLATE_REPO_LOCAL_PATH)) {
        (0, _1.deleteAll)(config_1.TEMPLATE_REPO_LOCAL_PATH); // 删除掉文件夹
        spinner.stop();
    }
    try {
        const res = yield (0, _1.downloadTemplate)(config_1.TEMPLATE_REPO, config_1.TEMPLATE_REPO_LOCAL_PATH);
        if (res === true) {
            (0, _1.deleteAll)(config_1.TEMPLATE_DEST); // 删除掉文件夹
            fs_extra_1.default.copySync(config_1.TEMPLATE_REPO_LOCAL_PATH + "/templates", config_1.TEMPLATE_DEST);
            (0, _1.deleteAll)(config_1.TEMPLATE_REPO_LOCAL_PATH); // 删除掉文件夹
        }
        spinner.stop();
    }
    catch (error) {
        spinner.stop();
        console.error("Template download failed.", error);
    }
});
exports.updateTemplates = updateTemplates;
