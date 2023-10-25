const dotenv = require('dotenv');
dotenv.config();

const MONGO_PROD = process.env.MONGO_URI;
const MONGO_MOCK = "don't know yet";

export function getDatabaseUri() {
  console.log(process.env.NODE_ENV);
  return process.env.NODE_ENV === 'test' ? MONGO_MOCK : MONGO_PROD;
}
