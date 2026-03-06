import chalk from 'chalk';

export class Logger {
  static info(message: string) {
    console.log(chalk.blue(`[INFO] ${new Date().toLocaleString()} - ${message}`));
  }

  static success(message: string) {
    console.log(chalk.green(`[SUCCESS] ${new Date().toLocaleString()} - ${message}`));
  }

  static warn(message: string) {
    console.log(chalk.yellow(`[WARN] ${new Date().toLocaleString()} - ${message}`));
  }

  static error(message: string) {
    console.log(chalk.red(`[ERROR] ${new Date().toLocaleString()} - ${message}`));
  }

  static command(commandName: string, userId: string, guildId?: string) {
    console.log(chalk.cyan(`[COMMAND] ${new Date().toLocaleString()} - ${commandName} executed by ${userId} ${guildId ? `in guild ${guildId}` : 'in DMs'}`));
  }
}
