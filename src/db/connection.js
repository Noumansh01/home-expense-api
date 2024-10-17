import mongoose from "mongoose";
import 'dotenv/config';

export  const connect_db = async ()=>{
    let db_password= process.env.PASSWORD_DB;
    let db_name= process.env.DB_NAME;

    const db_url=`mongodb+srv://noumansh700:${db_password}@home-expense-db.ekhq5.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=home-expense-db`;
         await mongoose.connect(db_url);
         console.log("database connected");
};