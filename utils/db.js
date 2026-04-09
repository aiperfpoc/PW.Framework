const mysql = require('mysql2/promise');

class DB {
  constructor() {
    require('dotenv').config();

  this.pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
    });         
  }

  async executeQuery(query) {
    const [rows] = await this.pool.execute(query);
    return rows;
  }
}

module.exports = new DB();