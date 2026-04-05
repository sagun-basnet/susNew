import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "sus",
});

db.connect((err) => {
  if (err) return console.log(err);
  return console.log("Database connected successfully");
});

export default db;
