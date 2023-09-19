import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Servidor } from 'src/servidor/servidor.model/servidor.model'; 

@Injectable()
export class ServidorService {
  constructor(
    @InjectModel('Servidor') private readonly servidorModel: Model<Servidor>,
  ) {}

  async criarServidor(servidorData: Servidor): Promise<Servidor> {
    const servidor = new this.servidorModel(servidorData);
    return await servidor.save();
  }

  async listarServidores(): Promise<Servidor[]> {
    return await this.servidorModel.find().exec();
  }

  async encontrarServidorPorId(id: string): Promise<Servidor | null> {
    return await this.servidorModel.findById(id).exec();
  }
}