import { Schema } from 'mongoose';
import { UserModel } from './user.type';


export const userSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
});


/**
 * statics definitions.
 */
userSchema.static('generate', async function(this: UserModel) {
  return this.create({
    key: 'my-key',
  });
});
