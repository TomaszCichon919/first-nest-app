/* eslint-disable */
import {
  Controller,
  Get,
  Param,
  Delete,
  Body,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dtos/create-client.dto';
import { UpdateClientDTO } from './dtos/update-client.dto';
import { ParseUUIDPipe, NotFoundException } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get('/')
  getAll(): any {
    return this.clientsService.getAll();
  }

  @Get('/extended')
  getAllExtended(): any {
    return this.clientsService.getAllExtended();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const client = await this.clientsService.getById(id);
    if (!client) throw new NotFoundException('Client not found');
    return client;
  }

  @Get('/extended/:id')
  async getExtendedById(@Param('id', new ParseUUIDPipe()) id: string) {
    const client = await this.clientsService.getExtendedById(id);
    if (!client) throw new NotFoundException('Client not found');
    return client;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.clientsService.getById(id)))
      throw new NotFoundException('Client not found');
    await this.clientsService.deleteById(id);
    return { success: true };
  }
  @Post('/')
  create(@Body() clientData: CreateClientDTO) {
    return this.clientsService.create(clientData);
  }

  @Put('/:id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() clientData: UpdateClientDTO,
  ) {
    if (!(await this.clientsService.getById(id)))
      throw new NotFoundException('Client not found');

    await this.clientsService.updateById(id, clientData);
    return { success: true };
  }
}
