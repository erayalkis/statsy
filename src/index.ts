import express, { Request, Response } from "express";
import color from "./helpers/color.ts";
import statsRouter from "./routers/stats.ts";
import { consoleLogger } from "./helpers/middleware.ts";
import { logStats } from "./helpers/os.ts";
import { ensureLogFilesExists } from "./helpers/startup.ts";

const app = express();
const port = 3000;

ensureLogFilesExists();

setInterval(() => {
  logStats(true, true);
}, 1000);

app.use("/stats", statsRouter);
app.use(consoleLogger);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(
    `🤖⚡ ${color.warnBright("[server]")} is listening on ${color.warnBright(
      `http://localhost:${port}`
    )}`
  );
});
