import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "../entities/client.entity";
import { ClientController } from "../controllers/client.Controller";
import { ClientService } from "../services/client.service";

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}