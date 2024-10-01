import express from "express";
const Router = express.Router();
import {createItem,sendItem } from"../../controller/items/userItems.js";



Router.post("/additem",createItem);
Router.get("/getitem/:id", sendItem );


export default Router;