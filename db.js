const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Hello.01582",
  host: "localhost",
  port: 5432,
  database: "propertyforyou",
});

module.exports = pool;
