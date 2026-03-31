import db from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  // console.log(hashPassword);

  // query
  const q = `insert into user(name, phone, email, password) value(?,?,?,?)`;

  //executing query
  db.query(q, [name, phone, email, hashPassword], (err, result) => {
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

export const login = (req, res) => {
  const { email, password } = req.body;

  const q = `select * from user where email = ?`;

  db.query(q, [email], (err, result) => {
    if (err) return res.send("Error while executing query".err);
    // return res.send(result);
    if (result.length === 0) {
      return res.send("User not found");
    }

    const isPasswordCorrect = bcrypt.compareSync(password, result[0].password);

    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          id: result[0].id,
          email: result[0].email,
          role: result[0].role,
        },
        "secretkey",
      );

      const { password, ...others } = result[0];

      return res.send({
        message: "User login successfully",
        token,
        user: others,
      });
    }

    return res.send("Password not match");
  });
};
