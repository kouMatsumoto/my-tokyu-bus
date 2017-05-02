"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const path_1 = require("path");
const index_1 = require("../config/index");
exports.logger = new (winston.Logger)({
    level: 'silly',
    transports: [
        new winston.transports.Console({
            colorize: true
        }),
        new winston.transports.File({
            filename: path_1.join(index_1.SERVER_ROOT, '/log/development.log'),
            json: true
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: path_1.join(index_1.SERVER_ROOT, '/log/exception.log'),
            json: true
        })
    ],
    exitOnError: false
});
