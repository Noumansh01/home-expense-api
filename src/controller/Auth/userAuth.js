
export const userRegister = (req , res)=>{
    const {fname, email,password}= req.body;
    if(!fname ||!email ||!password){
        
        res.status(400).json("All fields are require");
        
    }
    
    console.log(fname, email, password);
    
    res.status(201).json(`fname= ${fname} email= ${email} password=${password} `);

    };

export const userLogin = (req , res)=>{
    const {email,password}= req.body;
    if(!email ||!password){
        
        res.status(400).json("All fields are require");
        
    }
    
    console.log(email, password);
    
    res.status(201).json(`email= ${email} password=${password} `);

    };




    