const mysql = require('mysql2');

config = {
  host: 'localhost',
  user: 'root',
  password: 'U761F9JS', //password
  database: 'dashboard',
};

var connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) {
    return console.log('error connecting:' + JSON.stringify(err, undefined, 2));
  }
  console.log('connected successfully to DB.');
});

module.exports = {
  connection: mysql.createConnection(config),
};
