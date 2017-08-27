import { Schema } from 'mongoose';
import { UserModel } from './user.type';
import * as randomString from 'randomstring';
import { ENV } from '../../config/environments';


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
    key: randomString.generate(ENV.randomstringLength),
  });
});
