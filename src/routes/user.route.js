import express from "express";
import UserControler from "./../controllers/user.controller.js";

const UserRoute = express.Router();
UserRoute.get("/", UserControler.index);
UserRoute.post("/login", UserControler.login);
UserRoute.post("/signup", UserControler.signup);

export default UserRoute;
