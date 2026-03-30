import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  postUser,
  selectSingleUser,
  selectUser,
} from "../controller/user.js";

const route = express.Router();

route.get("/get-api", getUser);
route.post("/post-user", postUser);
route.post("/add-user", addUser);
route.get("/select-user", selectUser);
route.get("/get-single-user/:id", selectSingleUser);
route.delete("/delete-user/:id", deleteUser);
route.put("/edit-user/:id", editUser);

export default route;
