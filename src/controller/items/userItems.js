
export const createItem = (req , res)=>{
    const {name, price, quantity}= req.body;
    if(!name ||!price||!quantity){
        
        res.status(400).json("All fields are require");
        
    }
    
    console.log(name, price, quantity);
    
    res.status(201).json(`name= ${name} price= ${price} quantity=${quantity} `);

    };

export const sendItem = (req , res)=>{
    const {id}= req.params;
    if(!id){
        
        res.status(404).json("please send item id");
        
    }
    
    console.log(id);
    
    res.status(200).json({"your id is": id });

    };




    