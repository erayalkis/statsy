import express, { Request, Response } from "express";
import os from "../helpers/os.ts";
import { getValFromFuncs } from "../helpers/router.ts";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const vals = getValFromFuncs(os);
  res.send(vals);
});

router.get("/memory", (req: Request, res: Response) => {
  const { memFree, memTotal } = os;

  res.send({ memFree: memFree(), memTotal: memTotal() });
});

router.get("/cpus", (req: Request, res: Response) => {
  const { cpus } = os;

  res.send({ cpus: cpus() });
});

router.get("/loadavg", (req: Request, res: Response) => {
  const { loadAvg } = os;

  res.send({ loadAvg: loadAvg() });
});

router.get("/uptime", (req: Request, res: Response) => {
  const { uptime } = os;

  res.send({ uptime: uptime() });
});

export default router;
