import * as mongoose from 'mongoose';
const dbUrl = 'mongodb://localhost/test';


before(() => {
  mongoose.connect(dbUrl);
  console.log('db connected');
});

after(() => {
  mongoose.connection.close();
  console.log('db disconnected.');
});
