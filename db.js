/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
  connectionString: "postgresql://postgres:12345@localhost:5432/lunchly",
});

db.connect();

module.exports = db;
