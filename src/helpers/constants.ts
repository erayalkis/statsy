import { PathLike } from "fs";
import path from "path";

export const LOGSDIR: PathLike = "./logs";
export const USAGELOGSDIR = LOGSDIR + "/usage.txt";
export const REQUESTLOGSDIR = LOGSDIR + "/requests.txt";
export const SHOULD_LOG_USAGE_TO_FILE =
  process.env["LOG_USAGE_TO_FILE"] !== undefined;
export const SHOULD_LOG_USAGE_TO_CONSOLE =
  process.env["LOG_USAGE_TO_CONSOLE"] !== undefined;
export const SHOULD_LOG_REQUESTS_TO_FILE =
  process.env["LOG_REQUESTS_TO_FILE"] !== undefined;
export const SHOULD_LOG_REQUESTS_TO_CONSOLE =
  process.env["LOG_REQUESTS_TO_CONSOLE"] !== undefined;
export const DIR_NAME = path.resolve();
