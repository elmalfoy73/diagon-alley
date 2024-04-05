import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import {
  ApiBearerAuth, ApiTags,
} from '@nestjs/swagger';
import { ShopService } from "./shop.service";
import { Shop } from "./shop.entity";

@ApiTags('Shops')
@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {
  }

  @Get()
  async getAllShops() {
    return await this.shopService.getAllShops();
  };

  @Get('/byId/:id')
  async getShopById(@Param('id') id: number): Promise<Shop> {
    return await this.shopService.getShopById(id);
  };

  @Post()
  async createShop(@Param('shop') shop: Shop): Promise<Shop> {
    return await this.shopService.createShop(shop);
  };

  @Delete('/byId/:id')
  async deleteShop(@Param('id') id: number) {
    return await this.shopService.deleteShop(id);
  }
}