import { DotenvParseOutput, config } from '../../node_modules/dotenv/lib/main';
import { IConfigServise } from './config.inteface';

class ConfigService implements IConfigServise {
  private config: DotenvParseOutput;

  constructor() {
    const { parsed, error } = config();

    if (error) {
      throw new Error('Не удалось распарсить .env файл.');
    }

    if (!parsed) {
      throw new Error('Файл .env пустой.');
    }

    this.config = parsed;
  }

  get(key: string): string {
    return this.config[key];
  }
}

export { ConfigService };
