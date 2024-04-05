import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { Author } from "../entities/author.entity";
import { AuthorService } from "./author.service";
import { AuthorController } from "../controllers/author.controller";

export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async getAllBooks() {
    return this.bookRepository.find();
  };

  async getBookById(id: number): Promise<Book> {
    return this.bookRepository.findOneBy({ id });
  }

  async createBook(newBookData: Partial<Book>): Promise<Book> {
    const newBook = this.bookRepository.create(newBookData);
    return this.bookRepository.save(newBook);
  };

  async deleteBook (id: number) {
    const deletedBook = await this.bookRepository.findOneBy({ id });
    if (deletedBook) {
      await this.bookRepository.remove(deletedBook);
    }
  };

  async getBookWitchAuthorsName () {
    return this.bookRepository
      .createQueryBuilder('book')
      .select(['book.name', 'book.type', 'book.year', 'book.price', 'book.availability', 'author.firstName', 'author.lastName'])
      .innerJoin('book.author', 'author')
      .getMany();
  };
}