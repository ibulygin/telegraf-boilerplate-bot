import { Telegraf } from 'telegraf';
import { IBotContext } from '../bot/context';
import { TBot } from '../bot';

abstract class Command {
  constructor(protected bot: TBot) {}

  abstract handle(): void;
}

export { Command };
