const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'schoolboyq',
  database: 'db_employee_tracker'
},
  console.log('Connected to the inventory_db database.')
);

module.exports = db;