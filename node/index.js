// const express = require("express");
import express from "express";
import userRoute from "./router/user.route.js";

const app = express();
const port = 5555;

app.use(express.json());


app.use("/", userRoute) // /get-api

app.post("/post-api", (req, res) => {
  //   console.log(req.body);
  const { name, phone, email, password, role } = req.body;

  res.send(`Your name: ${name}`);
});

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
