import { existsSync, mkdir, writeFile } from "fs";
import { CONSOLELOGSDIR, LOGSDIR, USAGELOGSDIR } from "./constants.ts";

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
