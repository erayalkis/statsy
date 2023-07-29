import os from "os";
import console from "./console.ts";

const stats = {
  memFree: () => os.freemem(),
  memTotal: () => os.totalmem(),
  cpus: () => os.cpus(),
  loadAvg: () => os.loadavg(),
  uptime: () => os.uptime(),
};

export const logStats = () => {
  console.debugBright(
    `[USAGE STATISTICS]: CPU: ${stats.loadAvg()} MEMFREE: ${stats.memFree()} MEMTOTAL: ${stats.memTotal()} UPTIME: ${stats.uptime()}`
  );
};

export default stats;
