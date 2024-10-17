import {user} from "../../model/userSchema.js";
export const userRegister = async (req , res)=>{
    const {username, email,password}= req.body;
    if(!username ||!email ||!password){
        
        res.status(400).json("All fields are require");
        
    }
    
    console.log(username, email, password);

    try{
        const insertUser=  await new user({
            username:username,
            email: email,
            password: password
        });
        insertUser.save();
        
        res.status(201).json(`username= ${username} email= ${email} password=${password} `);
    }catch(err){
           console.log('this is register error' + err.message);
    }
   

    };



export const userLogin = async (req , res)=>{
    const {email,password}= req.body;
    if(!email ||!password){
        
        res.status(400).json("All fields are require");
        
    }
    try{
        const loginuser = await user.findOne({
            email,
            password
        });
        
        console.log(`users from db ${loginuser.email} ${loginuser.password}`);
        res.status(201).json(`email= ${loginuser.email} password=${loginuser.password} `);
        
    }catch(err){
        console.log('this is login error'+ err.message);
    }
 
    
    
    

    };




    