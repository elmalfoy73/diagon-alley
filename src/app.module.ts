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
import { shopOwnerModule } from "./wizards/modules/shopOwner.module";
import { ChatGateway } from "./chat.gateway";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }), ConfigModule.forRoot({
      isGlobal: true,
    }), ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]), AuthorModule, BookModule, ShopModule, ClientModule, shopOwnerModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
