import '../connect.test';
import * as expect from 'expect';
import { User } from './user.model';
import { ENV } from '../../config/environments';



describe('User Model', () => {
  it('has static method `generate`', () => {
    expect(typeof User.generate).toBe('function');
  });

  it('has key field', async () => {
    const user = await User.generate();
    expect(user.key.length).toBe(ENV.randomstringLength);
  });
});
