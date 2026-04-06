import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  login,
  postUser,
  selectSingleUser,
  selectUser,
} from "../controller/user.js";
import { isAdmin, isVerify } from "../middleware/isAuth.js";

const route = express.Router();

route.get("/get-api", isVerify, getUser);
route.post("/post-user", postUser);
route.post("/add-user", addUser);
route.get("/select-user", isVerify, isAdmin, selectUser);
route.get("/get-single-user/:id", selectSingleUser);
route.delete("/delete-user/:id", deleteUser);
route.put("/edit-user/:id", editUser);
route.post("/login", login);

export default route;
