const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    Password:String
})

const Usermodel=mongoose.model("users",UserSchema)
module.exports=Usermodel