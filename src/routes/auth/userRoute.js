import express from "express";
const Router = express.Router();
import {userLogin,userRegister} from"../../controller/Auth/userAuth.js";



Router.post("/register",userRegister);
Router.post("/login", userLogin);


export default Router;