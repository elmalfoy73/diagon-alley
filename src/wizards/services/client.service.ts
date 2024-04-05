import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from "../entities/client.entity";

export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async getAllClients(): Promise<Client[]> {
    return this.clientRepository.find();
  };

  async getClientById(id: number): Promise<Client> {
    return this.clientRepository.findOneBy({ id });
  }

  async createClient(newClientData: Partial<Client>): Promise<Client> {
    const newClient = this.clientRepository.create(newClientData);
    return this.clientRepository.save(newClient);
  };

  async deleteClient (id: number) {
    const deletedClient = await this.clientRepository.findOneBy({ id });
    if (deletedClient) {
      await this.clientRepository.remove(deletedClient);
    }
  };
}