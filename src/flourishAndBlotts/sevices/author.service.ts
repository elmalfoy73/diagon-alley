import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entities/author.entity';

export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async getAllAuthors(): Promise<Author[]> {
    return this.authorRepository.find();
  };

  async getAuthorById(id: number): Promise<Author> {
    return this.authorRepository.findOneBy({ id });
  }

  async createAuthor(newAuthorData: Partial<Author>): Promise<Author> {
    const newAuthor = this.authorRepository.create(newAuthorData);
    return this.authorRepository.save(newAuthor);
  };

  async deleteAuthor (id: number) {
    const deletedAuthor = await this.authorRepository.findOneBy({ id });
    if (deletedAuthor) {
      await this.authorRepository.remove(deletedAuthor);
    }
  };
}