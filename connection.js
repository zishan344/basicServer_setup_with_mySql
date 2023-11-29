const mysql = require("mysql");
const connection = mysql.createConnection({
  port: 3306,
  host: "slime.hostitbro.com",
  user: "shubh",
  password: "w6)iZ3udU?GK",
  database: "elitepro_learning-elite",
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
