import { Schema, model, Document, ObjectId } from 'mongoose';

export interface IDadosModel extends Document {
  _id:ObjectId;
  data: Date;
  temperatura1: number;
  temperatura2: number;
  humidade: number;
}

export const DadosSchema = new Schema<IDadosModel>({
  
  data: {
    type: Date,
    required: true,
  },
  temperatura1: {
    type: Number,
    required: true,
  },
  temperatura2: {
    type: Number,
    required: true,
  },
  humidade: {
    type: Number,
    required: true,
  }
});

export default model<IDadosModel>('Dados', DadosSchema);
