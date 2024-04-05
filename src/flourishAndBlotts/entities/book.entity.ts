import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from './author.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Book {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  type: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @ApiProperty()
  @Column({ nullable: true })
  year: number;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  availability: boolean;
}
