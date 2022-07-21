import fs from "fs-extra";
import ora from "ora";
import { deleteAll, downloadTemplate } from ".";
import { TEMPLATE_DEST, TEMPLATE_REPO, TEMPLATE_REPO_LOCAL_PATH } from "../config";

export const updateTemplates = async () => {
  const spinner = ora("Downloading template...");
  spinner.start();
  if (fs.existsSync(TEMPLATE_REPO_LOCAL_PATH)) {
    deleteAll(TEMPLATE_REPO_LOCAL_PATH); // 删除掉文件夹
    spinner.stop();
  }
  try {
    const res = await downloadTemplate(TEMPLATE_REPO, TEMPLATE_REPO_LOCAL_PATH);
    if (res === true) {
      deleteAll(TEMPLATE_DEST); // 删除掉文件夹
      fs.copySync(TEMPLATE_REPO_LOCAL_PATH + "/templates", TEMPLATE_DEST);
      deleteAll(TEMPLATE_REPO_LOCAL_PATH); // 删除掉文件夹
    }
    spinner.stop();
  } catch (error) {
    spinner.stop();
    console.error("Template download failed.",error);
  }
};
