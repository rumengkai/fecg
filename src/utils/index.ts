import fs from "fs";
import path, { resolve } from "path";
import downloadGit from "download-git-repo";

export const getAbsolutePath = (filePath: string) => {
  if (filePath && !path.isAbsolute(filePath)) {
    return path.join(process.cwd(), filePath);
  }
  return filePath;
};

export const mkdir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    mkdir(path.dirname(dir));
    fs.mkdirSync(dir);
  }
};

export const cwdPath = (...args) => {
  return resolve(process.cwd(), ...args);
};

// 删除本地文件夹及文件
export const deleteAll=(path:string) =>{
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      var curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteAll(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

/**
 * Download template from remote
 *
 * @param {*} repo
 * @param {*} dest
 * @returns
 */
 export async function downloadTemplate(repo: string, dest: string) {
  return new Promise((resolve, reject) => {
    downloadGit(repo, dest, { clone: true }, (err) => {
      if (err) {
        reject(err);
        console.error("download failed.", err);
      } else {
        console.log("download success");
        resolve(true);
      }
    });
  });
}
