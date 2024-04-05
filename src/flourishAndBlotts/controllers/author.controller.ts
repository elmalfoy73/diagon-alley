import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthorService } from '../sevices/author.service';
import { Author } from '../entities/author.entity';

@ApiTags('Flourish and Blotts')
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async getAllAuthors() {
    return await this.authorService.getAllAuthors();
  }

  @ApiOperation({
    summary: 'Get author',
  })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    type: Author,
  })
  @Get('/byId/:id')
  async getAuthorById(@Param('id') id: number): Promise<Author> {
    return await this.authorService.getAuthorById(id);
  }

  @Post()
  async createAuthor(@Param('author') author: Author): Promise<Author> {
    return await this.authorService.createAuthor(author);
  }

  @Delete('/byId/:id')
  async deleteAuthor(@Param('id') id: number) {
    return await this.authorService.deleteAuthor(id);
  }
}
