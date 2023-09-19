import * as mongoose from 'mongoose';

export const ServidorSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  contato: String,
  nascimento: Date,
});

export interface Servidor extends mongoose.Document {
  nome: string;
  cpf: string;
  contato: string;
  nascimento: Date;
}