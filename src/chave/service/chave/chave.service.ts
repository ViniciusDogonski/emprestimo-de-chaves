
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Chave } from '../../chave.model/chave.model';

@Injectable()
export class ChaveService {
  constructor(@InjectModel('Chave') private readonly chaveModel: Model<Chave>) {}

  async criarChave(nome: string, situacao: string): Promise<Chave> {
    const chave = new this.chaveModel({ nome, situacao });
    return await chave.save();
  }

  async listarChaves(): Promise<Chave[]> {
    return await this.chaveModel.find().exec();
  }

  async encontrarChavePorId(id: string): Promise<Chave> {
    const chave = await this.chaveModel.findById(id).exec();
    if (!chave) {
      throw new NotFoundException('Chave não encontrada.');
    }
    return chave;
  }

  async atualizarChave(id: string, nome: string, situacao: string): Promise<Chave> {
    const chave = await this.encontrarChavePorId(id);
    chave.nome = nome;
    chave.situacao = situacao;
    return await chave.save();
  }

  async deletarChave(id: string): Promise<void> {
    await this.encontrarChavePorId(id);
    await this.chaveModel.findByIdAndRemove(id).exec();
  }
}
