import { NextFunction, Request, Response } from "express";
import console from "./console.ts";

export const consoleLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.debugBright(
    `[SERVER] ${new Date().toISOString()} | ${res.statusCode} | [${
      req.method
    }] | ${req.path}`
  );
  next();
};
