
const mongoose = require('mongoose');


const todoSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    },
    task:{
        type:String,
        required:true
    }
    
})

const todoModel = mongoose.model('todo',todoSchema)

module.exports = todoModel;