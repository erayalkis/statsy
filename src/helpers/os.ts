import os from "os";
// @ts-ignore
import consoleAlt from "./console.js";
import { writeFile } from "fs";
// @ts-ignore
import { USAGELOGSDIR } from "./constants.js";
import { cpuTemperature } from "systeminformation";

const stats = {
  memFree: () => Math.round(os.freemem() / 1000000),
  memTotal: () => Math.round(os.totalmem() / 1000000),
  cpus: () => os.cpus(),
  loadAvg: () => os.loadavg(),
  uptime: () => os.uptime(),
  temp: async () =>
    cpuTemperature().then((tmp) => {
      return `MAIN: ${tmp.main} MAX: ${tmp.max}`;
    }),
};

export const logStats = async (logToConsole: boolean, logToFile: boolean) => {
  const logText = `[USAGE STATISTICS]-[${new Date().toISOString()}] CPU: ${stats.loadAvg()} TEMP: [${await stats.temp()}] MEMFREE: ${stats.memFree()} MEMTOTAL: ${stats.memTotal()} UPTIME: ${stats.uptime()} `;
  if (logToConsole) consoleAlt.debugBright(logText);

  if (logToFile) {
    writeFile(USAGELOGSDIR, logText + "\n", { flag: "a" }, () => {});
  }
};

export default stats;
