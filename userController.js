const User = require('./schema')
const bcrypt = require('bcryptjs')

const register = async(req, res) => {
    try{
       const {name,email,password} = req.body;

       const existing = User.findOne({email})

       if(existing){

       }

       if(!name || !email || !password){
         return  res.json({message : "All fields are required!"})
       }
    
       const hashedPassword = await bcrypt.hash(password, 10);

       const user = await User.create({
        name,
        email,
        password : hashedPassword
       });

       res.status(201).json("Registration successfull");
    }catch(err){
        res.status(500).json({message : `Internal Server Error : ${err}`})
    }
}

module.exports = register;