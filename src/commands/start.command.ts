import { TBot } from '../bot';
import { Command } from './command.base';

class StartCommand extends Command {
  constructor(bot: TBot) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => ctx.reply('Welcom'));
  }
}

export { StartCommand };
