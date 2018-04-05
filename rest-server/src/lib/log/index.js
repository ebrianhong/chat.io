import chalk from 'chalk';

  export const log = (...args) => {
    if (process.env.DEBUG === 'true') {
      console.log(chalk.default.black.bgWhite.bold(' ', ...args, ' '));
    }
  };

  export const success = (...args) => {
    if (process.env.DEBUG === 'true') {
      console.log(chalk.default.black.bgGreen.bold(' ', ...args, ' '));
    }
  };

  export const error = (...args) => {
    if (process.env.DEBUG === 'true') {
      console.log(chalk.default.black.bgRed.bold(' ', ...args, ' '));
    }
  };

  