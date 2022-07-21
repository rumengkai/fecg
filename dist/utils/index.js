"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadTemplate = exports.deleteAll = exports.cwdPath = exports.mkdir = exports.getAbsolutePath = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importStar(require("path"));
const download_git_repo_1 = tslib_1.__importDefault(require("download-git-repo"));
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
const cwdPath = (...args) => {
    return (0, path_1.resolve)(process.cwd(), ...args);
};
exports.cwdPath = cwdPath;
// 删除本地文件夹及文件
const deleteAll = (path) => {
    var files = [];
    if (fs_1.default.existsSync(path)) {
        files = fs_1.default.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs_1.default.statSync(curPath).isDirectory()) {
                // recurse
                (0, exports.deleteAll)(curPath);
            }
            else {
                // delete file
                fs_1.default.unlinkSync(curPath);
            }
        });
        fs_1.default.rmdirSync(path);
    }
};
exports.deleteAll = deleteAll;
/**
 * Download template from remote
 *
 * @param {*} repo
 * @param {*} dest
 * @returns
 */
function downloadTemplate(repo, dest) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            (0, download_git_repo_1.default)(repo, dest, { clone: true }, (err) => {
                if (err) {
                    reject(err);
                    console.error("download failed.", err);
                }
                else {
                    console.log("download success");
                    resolve(true);
                }
            });
        });
    });
}
exports.downloadTemplate = downloadTemplate;
