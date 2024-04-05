import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Author } from './flourishAndBlotts/entities/author.entity';
import { Book } from './flourishAndBlotts/entities/book.entity';
import { Client } from './wizards/entities/client.entity';
import { Shop } from './shops/shop.entity';
import { ShopOwner } from './wizards/entities/shopOwner.entity';

export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'dpg-cnqp5920si5c73brv3a0-a.frankfurt-postgres.render.com',
      port: 5432,
      username: 'diagon_alley_5x86_user',
      password: 'HwF9QMeHYnpcALSYWcEcawQauOcplcjy',
      database: 'diagon_alley_5x86',
      entities: [Author, Book, Shop, Client, ShopOwner],
      synchronize: true,
      ssl: true,
    };
  }
}
