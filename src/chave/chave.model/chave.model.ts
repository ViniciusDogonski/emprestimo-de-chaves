
import * as mongoose from 'mongoose';

export const ChaveSchema = new mongoose.Schema({
  nome: String,
  situacao: String,
});

export interface Chave extends mongoose.Document {
  nome: string;
  situacao: string;
}
