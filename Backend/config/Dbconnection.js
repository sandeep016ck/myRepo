const mongoose = require('mongoose');

async function dbconnect() {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING) 
        console.log(
            "Database Connected to",
            connect.connection.host,
            connect.connection.name
        )


    }catch(error){
        console.log("Error in dbconnect",error);
    }
    
}

module.exports=dbconnect;