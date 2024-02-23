const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/Alien'

const example=express()

mongoose.connect(url,{useNewUrlPasser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log("connected")
})