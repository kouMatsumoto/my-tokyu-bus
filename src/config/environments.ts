/**
 * Environment variables are configured in .env file
 * @see: https://github.com/motdotla/dotenv
 */

require('dotenv').config();

// env variable declarations.
const port = +process.env.PORT;
const dbUrl = process.env.DB_URL;
const randomstringLength = +process.env.RANDOMSTRING_LENGTH;


export const ENV = {
  port,
  dbUrl,
  randomstringLength,
};
