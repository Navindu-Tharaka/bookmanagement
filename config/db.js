



const{createPool} = require("mysql2");

const pool = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "#Tharaka123",
  database: "book_management",
  connectionLimit:10
});

module.exports = pool;