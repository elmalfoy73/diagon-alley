import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import {
  ApiBearerAuth, ApiTags,
} from '@nestjs/swagger';
import { ShopOwnerService } from "../services/shopOwner.service";
import { ShopOwner } from "../entities/shopOwner.entity";

@ApiTags('Wizards')
@Controller('shopOwners')
export class ShopOwnerController {
  constructor(private readonly shopOwnerService: ShopOwnerService) {
  }

  @Get()
  async getAllShopOwners() {
    return await this.shopOwnerService.getAllShopOwners();
  };

  @Get('/byId/:id')
  async getShopOwnerById(@Param('id') id: number): Promise<ShopOwner> {
    return await this.shopOwnerService.getShopOwnerById(id);
  };

  @Post()
  async createShopOwner(@Param('shopOwner') shopOwner: ShopOwner): Promise<ShopOwner> {
    return await this.shopOwnerService.createShopOwner(shopOwner);
  };

  @Delete('/byId/:id')
  async deleteShopOwner(@Param('id') id: number) {
    return await this.shopOwnerService.deleteShopOwner(id);
  }
}