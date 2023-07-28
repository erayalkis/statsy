import { NextFunction, Request, Response } from "express";
import console from "./console.ts";

export const consoleLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.debugBright(`Received request from ${req.ip}`);
};
