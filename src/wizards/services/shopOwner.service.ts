import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopOwner } from "../entities/shopOwner.entity";

export class ShopOwnerService {
  constructor(
    @InjectRepository(ShopOwner)
    private shopOwnerRepository: Repository<ShopOwner>,
  ) {}

  async getAllShopOwners(): Promise<ShopOwner[]> {
    return this.shopOwnerRepository.find();
  };

  async getShopOwnerById(id: number): Promise<ShopOwner> {
    return this.shopOwnerRepository.findOneBy({ id });
  }

  async createShopOwner(newShopOwnerData: Partial<ShopOwner>): Promise<ShopOwner> {
    const newShopOwner = this.shopOwnerRepository.create(newShopOwnerData);
    return this.shopOwnerRepository.save(newShopOwner);
  };

  async deleteShopOwner (id: number) {
    const deletedShopOwner = await this.shopOwnerRepository.findOneBy({ id });
    if (deletedShopOwner) {
      await this.shopOwnerRepository.remove(deletedShopOwner);
    }
  };
}