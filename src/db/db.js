const mysql = require('mysql');

const ENV = process.env.NODE_ENV || 'prod';

const config = {
    host: 'localhost',
    user: 'root',
    password: 'opcito1309',
    database: 'tdc_dev'
}

const connection = mysql.createConnection(config);

connection.connect();

//For testing connection
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  
connection.end();


module.exports = connection;