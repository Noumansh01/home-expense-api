import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    username:{
        type: String,
        Required: true,

    },
    email:{
        type: String,
        Required: true,
        unique: true
    },
    password:{
        type: String,
        Required: true,
        unique: true
    }
},{timestamps:true});

 export  const user= mongoose.model("user",userSchema);