import { PathLike, existsSync, mkdir, writeFile } from "fs";
// @ts-ignore
import { LOGSDIR } from "./constants.js";

export const createLogsFolderIfNotExists = () => {
  if (!existsSync(LOGSDIR)) {
    mkdir(LOGSDIR, () => {});
  }
};

export const createLogFile = (fileDir: PathLike) => {
  const fullpath = LOGSDIR.toString() + fileDir;
  if (!existsSync(fullpath)) {
    writeFile(fullpath, "", () => {});
  }
};
