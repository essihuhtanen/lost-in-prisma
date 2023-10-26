const dotenv = require('dotenv');
dotenv.config();

const MONGO_PROD = process.env.MONGO_URI;
const MONGO_TEST = process.env.MONGO_URI_TEST;

export function getDatabaseUri() {
  console.log(process.env.NODE_ENV);
  return process.env.NODE_ENV === 'test' ? MONGO_TEST : MONGO_PROD;
}
