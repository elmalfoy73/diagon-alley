import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Shop } from '../../shops/shop.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class ShopOwner {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @OneToMany(() => Shop, (shop) => shop.owner)
  shop: Shop;
}
