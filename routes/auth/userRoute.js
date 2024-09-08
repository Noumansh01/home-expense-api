const express = require("express");
const Router = express.Router();
const {userLogin}= require("../../controller/Auth/userAuth");
const {userRegister}= require("../../controller/Auth/userAuth");



Router.post("/login", userLogin);
Router.post("/register",userRegister);

module.exports = {Router};