import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ShopOwner } from '../wizards/entities/shopOwner.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Shop {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  about: string;

  @OneToOne(() => ShopOwner, (owner) => owner.shop)
  owner: ShopOwner;
}
