import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from './book.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Author {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
