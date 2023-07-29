import { PathLike, existsSync, mkdir, writeFile } from "fs";
import { LOGSDIR } from "./constants.ts";

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
