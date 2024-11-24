import { ConfigService } from './config';
import { Bot } from './bot';
import { LoggerService } from './services';

const bot = new Bot(new ConfigService(), new LoggerService());

bot.init();
