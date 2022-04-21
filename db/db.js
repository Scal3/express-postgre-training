const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: '7306',
  host: 'localhost',
  port: 5432,
  database: 'express_postgre'
})

module.exports = pool