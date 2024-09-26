const jwt= require("jsonwebtoken");
const dotenv=require('dotenv')


 function verification(req,res,next){
    const token = req.headers['authorization']

    if(!token){
        return res.status(400).json({
            message:"Invalid User"
        })
    }

    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err){
            return res.status(400).json({
                message:"Invalid User"
            })
        }

        req.user=user
        next()
    })

   

}


module.exports = verification;