import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ServidorService } from '../service/servidor/servidor.service'; 
import { Servidor } from '../servidor.model/servidor.model'; 

@Controller('servidores')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @Get()
  async listarServidores(): Promise<Servidor[]> {
    return this.servidorService.listarServidores();
  }

  @Get(':id')
  async encontrarServidorPorId(@Param('id') id: string): Promise<Servidor | null> {
    return this.servidorService.encontrarServidorPorId(id);
  }

  @Post()
  async criarServidor(@Body() servidorData: Servidor): Promise<Servidor> {
    return this.servidorService.criarServidor(servidorData);
  }
}
