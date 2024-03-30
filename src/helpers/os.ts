import os from "os";
// @ts-ignore
import console from "./console.js";
import { writeFile } from "fs";
// @ts-ignore
import { USAGELOGSDIR } from "./constants.js";
import { cpuTemperature } from "systeminformation"

const stats = {
  memFree: () => os.freemem(),
  memTotal: () => os.totalmem(),
  cpus: () => os.cpus(),
  loadAvg: () => os.loadavg(),
  uptime: () => os.uptime(),
};

export const logStats = (logToConsole: boolean, logToFile: boolean) => {
  const logText = `[USAGE STATISTICS]-[${new Date().toISOString()}] CPU: ${stats.loadAvg()} MEMFREE: ${stats.memFree()} MEMTOTAL: ${stats.memTotal()} UPTIME: ${stats.uptime()} `;
  if (logToConsole) console.debugBright(logText);

  if (logToFile) {
    writeFile(USAGELOGSDIR, logText + "\n", { flag: "a" }, () => {});
  }
};

export default stats;
