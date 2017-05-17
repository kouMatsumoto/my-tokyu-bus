import * as winston from 'winston';
import { join } from 'path';
import { LOG_ROOT } from '../config/index';


export const logger = new (winston.Logger)({
  level: 'silly',
  transports: [
    new winston.transports.Console({
      colorize: true
    }),
    new winston.transports.File({
      filename: join(LOG_ROOT, 'development.log'),
      json: true
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: join(LOG_ROOT, 'exception.log'),
      json: true
    })
  ],
  exitOnError: false
});
