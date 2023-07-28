import color from "./color.ts";

const clog = console.log;

export default {
  success: (str: string) => clog(color.success(str)),
  successBright: (str: string) => clog(color.sucessBright(str)),
  error: (str: string) => clog(color.error(str)),
  errorBright: (str: string) => clog(color.errorBright(str)),
  warn: (str: string) => clog(color.warn(str)),
  warnBright: (str: string) => clog(color.warnBright(str)),
  debug: (str: string) => clog(color.debug(str)),
  debugBright: (str: string) => clog(color.debugBright(str)),
};
