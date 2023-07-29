import os from "os";
import console from "./console.ts";
import { writeFile } from "fs";
import { USAGELOGSDIR } from "./constants.ts";

const stats = {
  memFree: () => os.freemem(),
  memTotal: () => os.totalmem(),
  cpus: () => os.cpus(),
  loadAvg: () => os.loadavg(),
  uptime: () => os.uptime(),
};

export const logStats = (logToConsole: boolean, logToFile: boolean) => {
  const logText = `[USAGE STATISTICS]: CPU: ${stats.loadAvg()} MEMFREE: ${stats.memFree()} MEMTOTAL: ${stats.memTotal()} UPTIME: ${stats.uptime()} TIME: ${new Date().toISOString()}`;
  if (logToConsole) console.debugBright(logText);

  if (logToFile) {
    writeFile(USAGELOGSDIR, logText + "\n", { flag: "a" }, () => {});
  }
};

export default stats;
