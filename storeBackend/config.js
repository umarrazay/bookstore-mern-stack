require('dotenv').config();

module.exports = {
  SERVER_PORT: process.env.PORT,
  MONGO_DB_URI: process.env.MONGO_URI
};