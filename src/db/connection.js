import mongoose from "mongoose";
import 'dotenv/config';

export  const connect_db = ()=>{
    let db_password= process.env.PASSWORD-DB;

    const db_url=`mongodb+srv://noumansh700:${db_password}@home-expense-db.ekhq5.mongodb.net/?retryWrites=true&w=majority&appName=home-expense-db`;
mongoose.connect(db_url);
console.log("database connected");
};