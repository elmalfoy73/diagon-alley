import { Module } from '@nestjs/common';
import { AuthorController } from "../controllers/author.controller";
import { AuthorService } from "../sevices/author.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "../entities/author.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}