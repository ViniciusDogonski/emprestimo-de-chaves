import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChaveService } from '../service/chave/chave.service';
import { Chave } from '../chave.model/chave.model';

@Controller('chaves')
export class ChaveController {
  constructor(private readonly chaveService: ChaveService) {}

  @Post()
  async criarChave(@Body() data: Chave): Promise<Chave> {
    console.log(data)
    return this.chaveService.criarChave(data.nome, data.situacao);
  }

  @Get()
  async listarChaves(): Promise<Chave[]> {
    return this.chaveService.listarChaves();
  }

  @Get(':id')
  async encontrarChavePorId(@Param('id') id: string): Promise<Chave> {
    return this.chaveService.encontrarChavePorId(id);
  }

  @Put(':id')
  async atualizarChave(@Param('id') id: string, @Body() data: Chave): Promise<Chave> {
    return this.chaveService.atualizarChave(id, data.nome, data.situacao);
  }

  @Delete(':id')
  async deletarChave(@Param('id') id: string): Promise<void> {
    return this.chaveService.deletarChave(id);
  }
}
