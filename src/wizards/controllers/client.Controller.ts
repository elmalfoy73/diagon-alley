import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import {
  ApiBearerAuth, ApiTags,
} from '@nestjs/swagger';
import { ClientService } from "../services/client.service";
import { Client } from "../entities/client.entity";

@ApiTags('Wizards')
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {
  }

  @Get()
  async getAllClients() {
    return await this.clientService.getAllClients();
  };

  @Get('/byId/:id')
  async getClientById(@Param('id') id: number): Promise<Client> {
    return await this.clientService.getClientById(id);
  };

  @Post()
  async createClient(@Param('client') client: Client): Promise<Client> {
    return await this.clientService.createClient(client);
  };

  @Delete('/byId/:id')
  async deleteClient(@Param('id') id: number) {
    return await this.clientService.deleteClient(id);
  }
}