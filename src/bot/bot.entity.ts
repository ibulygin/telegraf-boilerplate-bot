import { Telegraf } from 'telegraf';
import { IBot, TBot } from './bot.interface';
import { IConfigServise } from '../config';
import { Command, StartCommand } from '../commands';
import { ILogger } from '../services';

import LocalSession from 'telegraf-session-local';

class Bot implements IBot {
  private bot: TBot;
  private commands: Command[] = [];

  constructor(
    private readonly configService: IConfigServise,
    private readonly loggerService: ILogger
  ) {
    const token = this.configService.get('TOKEN');

    if (!token) throw new Error('Token is missing in the configuration');

    this.bot = new Telegraf(token);
    this.setUpBot();
  }

  private setUpBot() {
    this.bot.use(new LocalSession({ database: 'example' }).middleware());

    this.commands = [new StartCommand(this.bot)];
    this.handleCommands();
  }

  private handleCommands(): void {
    for (const command of this.commands) {
      command.handle();
    }
  }

  init(): void {
    this.bot
      .launch(() => this.loggerService.info('The bot has been launched'))
      .catch((err) => this.loggerService.error(err));
  }
}

export { Bot };
