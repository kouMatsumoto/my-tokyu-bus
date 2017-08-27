import { Schema, Document, Model } from 'mongoose';

/**
 * a interface of instance of mongoose Model
 * e.g.) `const user = new UserModel()`
 */
export interface UserDocument extends Document {
  _id: Schema.Types.ObjectId;
  key: string;
}


export interface UserModel extends Model<UserDocument> {
  generate(): Promise<UserDocument>;
}
