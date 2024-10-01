
export const userRegister = (req , res)=>{
    const {name,password ,cpassword}= req.body;
    if(!name ||!password ||!cpassword){
        res.send("please enter data");
        
    }
    else{
    console.log(name, password,cpassword);
    
    res.send(`Name= ${name} Password= ${password} cpassword=${cpassword} `);
}
    };

export const userLogin = (req , res)=>{
res.send("hello i am login");
};



    