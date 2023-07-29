import { PathLike, existsSync, mkdir, writeFile } from "fs";

const LOGSDIR: PathLike = "./logs";

export const createLogsFolderIfNotExists = () => {
  if (!existsSync(LOGSDIR)) {
    mkdir(LOGSDIR, () => {});
  }
};

export const createLogFile = (fileDir: PathLike) => {
  const fullpath = LOGSDIR + fileDir;
  if (!existsSync(fullpath)) {
    writeFile(fullpath, "", () => {});
  }
};
