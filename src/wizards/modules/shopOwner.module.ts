import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopOwnerController } from "../controllers/shopOwner.controller";
import { ShopOwnerService } from "../services/shopOwner.service";
import { ShopOwner } from "../entities/shopOwner.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ShopOwner])],
  controllers: [ShopOwnerController],
  providers: [ShopOwnerService],
})
export class shopOwnerModule {}