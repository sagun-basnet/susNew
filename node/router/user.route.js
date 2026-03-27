import express from "express";
import { getUser, postUser } from "../controller/user.js";

const route = express.Router();

route.get("/get-api", getUser);
route.post("/post-user", postUser);

export default route;
