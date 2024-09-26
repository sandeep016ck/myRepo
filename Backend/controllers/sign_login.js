

const userModel = require('../models/userModels')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config()


const  userSignup= async(req,res)=>{
    
    const {username,email,password}= req.body
    if(!username || !email || !password){
        return res.status(400).send({
            message:"All fields are mandetory"
        })
    }

    try{
        const hpassword= await bcrypt.hash(password,5)
        const newuser = await userModel.create({
            username,
            email,
            password:hpassword
        })

        res.status(200).json({
            message:"User created Successfully"
        })


    }catch(error){
        console.log("Error in signup controller",error)
        return res.status(500).json({
            message:"Error, Try after some time"
        })

    }

}


const userLogin = async(req,res)=>{
    const {email,password} =  req.body;
    if(!email || !password){
        return res.status(400).json({
            message:"All fields are mandetory"
        })
    }

    try {
        const user = await userModel.findOne({email})

        if(user && (await bcrypt.compare(password,user.password))){
            const token = jwt.sign({
                user:{
                    user_id:user._id,
                    username:user.username
                }
            },process.env.SECRET,{expiresIn:'1h'})
            res.status(200).json({
                data:token
            })   
        }
    } catch (error) {
        console.log("error in login",error)
        return res.status(400).json({
            message:"unable to login"
        })
        
    }
   
}




module.exports={
    userSignup,
    userLogin
}