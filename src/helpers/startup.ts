import { existsSync, mkdir, writeFile } from "fs";
// @ts-ignore
import { CONSOLELOGSDIR, LOGSDIR, USAGELOGSDIR } from "./constants.js";

export const ensureLogFilesExists = () => {
  if (!existsSync(LOGSDIR)) {
    mkdir(LOGSDIR, () => {});
  }
  if (!existsSync(USAGELOGSDIR)) {
    writeFile(USAGELOGSDIR, "", () => {});
  }
  if (!existsSync(CONSOLELOGSDIR)) {
    writeFile(CONSOLELOGSDIR, "", () => {});
  }
};
