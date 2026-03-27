import db from "../database/db.js";

export const getUser = (req, res) => {
  const q = `select * from user`;

  db.query(q, (err, result) => {
    if (err) return res.send("Error while executing query", err);

    return res.send(result);
  });
};

export const postUser = (req, res) => {
  //receving data
  const { name, phone, email, password } = req.body;

  // query
  const q = `insert into user(name, phone, email, password) value(?,?,?,?)`;

  //executing query
  db.query(q, [name, phone, email, password], (err, result) => {
    if (err) return res.send("Error while executing query", err);

    return res.send("User inserted into database", result);
  });
};
