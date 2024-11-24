import { Context } from 'telegraf';

interface ISession {}

interface IBotContext extends Context {
  session: ISession;
}

export { IBotContext };
