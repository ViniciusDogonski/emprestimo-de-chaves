import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Emprestimo } from 'src/emprestimo/emprestimo.model/emprestimo.model'; 

@Injectable()
export class EmprestimoService {
  constructor(@InjectModel('Emprestimo') private readonly emprestimoModel: Model<Emprestimo>) {}

  async criarEmprestimo(emprestimoData: Emprestimo): Promise<Emprestimo> {
    const emprestimo = new this.emprestimoModel(emprestimoData);
    return await emprestimo.save();
  }

  async listarEmprestimos(): Promise<Emprestimo[]> {
    return await this.emprestimoModel.find().exec();
  }

  async encontrarEmprestimoPorId(id: string): Promise<Emprestimo> {
    const emprestimo = await this.emprestimoModel.findById(id).exec();
    if (!emprestimo) {
      throw new NotFoundException('Empréstimo não encontrado.');
    }
    return emprestimo;
  }

  async atualizarEmprestimo(id: string, emprestimoData: Emprestimo): Promise<Emprestimo> {
    const emprestimo = await this.encontrarEmprestimoPorId(id);
    emprestimo.datahoraEmprestimo = emprestimoData.datahoraEmprestimo;
    emprestimo.datahoraDevolucao = emprestimoData.datahoraDevolucao;
    emprestimo.chave = emprestimoData.chave;
    emprestimo.servidorRetirou = emprestimoData.servidorRetirou;
    emprestimo.servidorDevolvel = emprestimoData.servidorDevolvel;
    return await emprestimo.save();
  }

  async deletarEmprestimo(id: string): Promise<void> {
    await this.encontrarEmprestimoPorId(id);
    await this.emprestimoModel.findByIdAndRemove(id).exec();
  }
}
