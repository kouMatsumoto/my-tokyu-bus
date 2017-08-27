import { model } from 'mongoose';
import { UserDocument, UserModel } from './user.type';
import { userSchema } from './user.schema';


export const User: UserModel = <UserModel>model<UserDocument>('User', userSchema);
