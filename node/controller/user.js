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

export const addUser = (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    const q = `insert into user(name, email, password, phone) value(?, ?, ?, ?)`;

    db.query(q, [name, email, password, phone], (err, result) => {
      if (err) return res.send("Error while executing query".err);
      return res.send("Data inserted into database", result);
    });
  } catch (err) {
    console.log(err);
  }
};

export const selectUser = (req, res) => {
  try {
    const q = `select * from user`;

    db.query(q, (err, result) => {
      if (err) return res.send("Error while executing query".err);
      return res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const q = `delete from user where id = ?`;

  db.query(q, [id], (err, result) => {
    if (err) return res.send("Error while executing query".err);
    return res.send(result);
  });
};

export const editUser = (req, res) => {
  const { id } = req.params;
  const { name, phone, email, password } = req.body;

  const q = `update user set name = ?, phone = ?, email = ?, password = ? where id = ?`;

  db.query(q, [name, phone, email, password, parseInt(id)], (err, result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};

export const selectSingleUser = (req, res) => {
  const { id } = req.params;
  try {
    const q = `select * from user where id = ?`;

    db.query(q, [id], (err, result) => {
      if (err) return res.send("Error while executing query".err);
      return res.send(result[0]);
    });
  } catch (err) {
    console.log(err);
  }
};
