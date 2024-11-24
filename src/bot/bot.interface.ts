import { Telegraf } from 'telegraf';
import { IBotContext } from './context';

interface IBot {
  init(): void;
}

type TBot = Telegraf<IBotContext>;

export { IBot, TBot };
