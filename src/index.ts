import express, { Request, Response } from "express";
// @ts-ignore
import color from "./helpers/color.js";
// @ts-ignore
import statsRouter from "./routers/stats.js";
// @ts-ignore
import { consoleLogger } from "./helpers/middleware.js";
// @ts-ignore
import { logStats } from "./helpers/os.js";
// @ts-ignore
import { ensureLogFilesExists } from "./helpers/startup.js";
import {
  SHOULD_LOG_USAGE_TO_CONSOLE,
  SHOULD_LOG_USAGE_TO_FILE,
  DIR_NAME,
  // @ts-ignore
} from "./helpers/constants.js";
import path from "path";

const app = express();
const port = 3000;
const deps = ["chart.js"];

ensureLogFilesExists();

if (SHOULD_LOG_USAGE_TO_CONSOLE || SHOULD_LOG_USAGE_TO_FILE) {
  setInterval(() => {
    logStats(SHOULD_LOG_USAGE_TO_CONSOLE, SHOULD_LOG_USAGE_TO_FILE);
  }, 5000);
}

app.use("/public", express.static(path.join(DIR_NAME, "public")));
app.use("/stats", statsRouter);
app.use(consoleLogger);

deps.forEach((dep) => {
  app.use(`/${dep}`, express.static(path.resolve(`node_modules/${dep}`)));
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(DIR_NAME, "/public/html/index.html"));
});

app.listen(port, () => {
  console.log(
    `🤖⚡ ${color.warnBright("[server]")} is listening on ${color.warnBright(
      `http://localhost:${port}`
    )}`
  );
});
