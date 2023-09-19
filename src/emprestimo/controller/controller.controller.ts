import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { EmprestimoService } from '../service/emprestimo/emprestimo.service'; 
import { Emprestimo } from '../emprestimo.model/emprestimo.model';

@Controller('emprestimos')
export class EmprestimoController {
  constructor(private readonly emprestimoService: EmprestimoService) {}

  @Post()
  async criarEmprestimo(@Body() emprestimoData: Emprestimo): Promise<Emprestimo> {
    return this.emprestimoService.criarEmprestimo(emprestimoData);
  }

  @Get()
  async listarEmprestimos(): Promise<Emprestimo[]> {
    return this.emprestimoService.listarEmprestimos();
  }

  @Get(':id')
  async encontrarEmprestimoPorId(@Param('id') id: string): Promise<Emprestimo> {
    return this.emprestimoService.encontrarEmprestimoPorId(id);
  }

  @Put(':id')
  async atualizarEmprestimo(@Param('id') id: string, @Body() emprestimoData: Emprestimo): Promise<Emprestimo> {
    return this.emprestimoService.atualizarEmprestimo(id, emprestimoData);
  }

  @Delete(':id')
  async deletarEmprestimo(@Param('id') id: string): Promise<void> {
    return this.emprestimoService.deletarEmprestimo(id);
  }
}
