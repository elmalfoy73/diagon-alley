import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from "./shop.entity";

export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
  ) {}

  async getAllShops(): Promise<Shop[]> {
    return this.shopRepository.find();
  };

  async getShopById(id: number): Promise<Shop> {
    return this.shopRepository.findOneBy({ id });
  }

  async createShop(newShopData: Partial<Shop>): Promise<Shop> {
    const newShop = this.shopRepository.create(newShopData);
    return this.shopRepository.save(newShop);
  };

  async deleteShop (id: number) {
    const deletedShop = await this.shopRepository.findOneBy({ id });
    if (deletedShop) {
      await this.shopRepository.remove(deletedShop);
    }
  };
}