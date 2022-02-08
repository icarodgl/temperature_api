import { Schema, model, Document, ObjectId } from 'mongoose';
export interface IAuthModel extends Document {
  _id:ObjectId;
  username: string;
  password: string;
  role: number;
  user: string;
}

const AuthSchema = new Schema<IAuthModel>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user: { type: String, required: false },
  role: { type: Number, required: true },
});

export default model<IAuthModel>('Auth', AuthSchema);
