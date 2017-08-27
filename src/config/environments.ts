/**
 * Environment variables are configured in .env file
 * @see: https://github.com/motdotla/dotenv
 */

require('dotenv').config();

// env variable declarations.
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;


export const ENV = {
  port,
  dbUrl,
};
