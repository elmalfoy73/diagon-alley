import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @Column()
  year: number;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column()
  availability: boolean;
}
