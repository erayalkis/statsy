import { NextFunction, Request, Response } from "express";
import console from "./console.ts";
import { writeFile } from "fs";
import { CONSOLELOGSDIR } from "./constants.ts";

export const consoleLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const logText = `[SERVER] ${new Date().toISOString()} | ${
    res.statusCode
  } | [${req.method}] | ${req.path}`;

  console.debugBright(logText);
  writeFile(CONSOLELOGSDIR, logText + "\n", { flag: "a" }, () => {});
  next();
};
