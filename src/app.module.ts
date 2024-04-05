import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { TypeOrmConfigService } from './TypeOrmConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from "./flourishAndBlotts/modules/author.module";
import { BookModule } from "./flourishAndBlotts/modules/book.module";
import { ShopModule } from "./shops/shop.module";
import { ClientModule } from "./wizards/modules/client.module";
import { ShopOwner } from "./wizards/entities/shopOwner.entity";
import { shopOwnerModule } from "./wizards/modules/shopOwner.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }), AuthorModule, BookModule, ShopModule, ClientModule, shopOwnerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
