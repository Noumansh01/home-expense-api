import express from "express";
const Router = express.Router();
import {sendShoppingList } from"../../controller/shoppingList/shoppingList.js";


Router.get("/list", sendShoppingList);


export default Router;