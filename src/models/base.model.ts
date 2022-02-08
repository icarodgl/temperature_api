import { Document, ObjectId } from 'mongoose';
export interface IBaseModel extends Document {
  _id: ObjectId;
}
