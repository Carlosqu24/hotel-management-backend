const { config } = require("dotenv");
config();

module.exports = {
      db_user: process.env.DB_USER,
      db_password: process.env.DB_PASSWORD,
      db_name: process.env.DB_NAME
}