import express from "express";
const Router = express.Router();
import {userLogin,userRegister} from"../../../controller/Auth/userAuth.js";




Router.get("/login", userLogin);
Router.get("/register",userRegister);

export default Router;