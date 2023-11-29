const mysql = require("mysql");
const connection = mysql.createConnection({
  port: 111,
  host: "xxxxxx",
  user: "xxxxxx",
  password: "xxxxx",
  database: "xxxxxxx",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connection successfully");
  }
});

module.exports = {
  connection,
};
