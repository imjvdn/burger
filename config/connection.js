var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'zr4o8op5ky60zr3m',
    password: 'mlvrpr4mryc1vo7k',
    database: 'dub7lk4c1jom16hm',
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
