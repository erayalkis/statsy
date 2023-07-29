import { existsSync, mkdir, writeFile } from "fs";
import { LOGSDIR, USAGELOGSDIR } from "./constants.ts";

export const ensureLogFilesExists = () => {
  if (!existsSync(LOGSDIR)) {
    mkdir(LOGSDIR, () => {});
  }
  if (!existsSync(USAGELOGSDIR)) {
    writeFile(USAGELOGSDIR, "", () => {});
  }
};
