import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import {
  ApiBearerAuth, ApiTags,
} from '@nestjs/swagger';
import { BookService } from "../sevices/book.service";
import { Book } from "../entities/book.entity";

@ApiTags('Flourish and Blotts')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {
  }

  @Get()
  async getAllBooks() {
    return await this.bookService.getAllBooks();
  };

  @Get('/byId/:id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return await this.bookService.getBookById(id);
  };

  @Get('withAuthors')
  async getBookWitchAuthorsName(){
    return await this.bookService.getBookWitchAuthorsName();
  };

  @Post()
  async createBook(@Param('Book') Book: Book): Promise<Book> {
    return await this.bookService.createBook(Book);
  };

  @Delete('/byId/:id')
  async deleteBook(@Param('id') id: number) {
    return await this.bookService.deleteBook(id);
  }
}