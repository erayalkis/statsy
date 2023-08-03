import { existsSync, mkdir, writeFile } from "fs";
// @ts-ignore
import { REQUESTLOGSDIR, LOGSDIR, USAGELOGSDIR } from "./constants.js";

export const ensureLogFilesExists = () => {
  if (!existsSync(LOGSDIR)) {
    mkdir(LOGSDIR, () => {});
  }
  if (!existsSync(USAGELOGSDIR)) {
    writeFile(USAGELOGSDIR, "", () => {});
  }
  if (!existsSync(REQUESTLOGSDIR)) {
    writeFile(REQUESTLOGSDIR, "", () => {});
  }
};
