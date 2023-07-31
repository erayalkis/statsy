import { NextFunction, Request, Response } from "express";
import console from "./console.ts";
import { writeFile } from "fs";
import {
  CONSOLELOGSDIR,
  SHOULD_LOG_REQUESTS_TO_CONSOLE,
  SHOULD_LOG_REQUESTS_TO_FILE,
} from "./constants.ts";

export const consoleLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const logText = `[SERVER] ${new Date().toISOString()} | ${
    res.statusCode
  } | [${req.method}] | ${req.path}`;

  if (SHOULD_LOG_REQUESTS_TO_CONSOLE) console.debugBright(logText);

  if (SHOULD_LOG_REQUESTS_TO_FILE)
    writeFile(CONSOLELOGSDIR, logText + "\n", { flag: "a" }, () => {});

  next();
};
