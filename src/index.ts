import express, { Request, Response } from "express";
import color from "./helpers/color.ts";
import statsRouter from "./routers/stats.ts";
import { consoleLogger } from "./helpers/middleware.ts";
import { logStats } from "./helpers/os.ts";
import { ensureLogFilesExists } from "./helpers/startup.ts";
import {
  SHOULD_LOG_USAGE_TO_CONSOLE,
  SHOULD_LOG_USAGE_TO_FILE,
  DIR_NAME,
} from "./helpers/constants.ts";
import path from "path";

const app = express();
const port = 3000;

ensureLogFilesExists();

if (SHOULD_LOG_USAGE_TO_CONSOLE || SHOULD_LOG_USAGE_TO_FILE) {
  setInterval(() => {
    logStats(SHOULD_LOG_USAGE_TO_CONSOLE, SHOULD_LOG_USAGE_TO_FILE);
  }, 1000);
}

app.use("/public", express.static(path.join(DIR_NAME, "public")));
app.use("/stats", statsRouter);
app.use(consoleLogger);

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
