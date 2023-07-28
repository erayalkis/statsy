import chalk from "chalk";

export default {
  success: (str: string) => chalk.green(str),
  sucessBright: (str: string) => chalk.greenBright(str),
  error: (str: string) => chalk.red(str),
  errorBright: (str: string) => chalk.redBright(str),
  warn: (str: string) => chalk.yellow(str),
  warnBright: (str: string) => chalk.yellowBright(str),
};
