const mongoose = require('mongoose')

const messageModel = new mongoose.Schema({
   sender : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   },
   content : {
    type : String,
    trim : true
   },
   chat: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User" 
   }
}, {timestamps: true})

module.exports = mongoose.model("Message" , messageModel)