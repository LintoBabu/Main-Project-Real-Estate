import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO).then (()=>{
    console.log('Connected to DB')
}).catch((err)=>{
    console.log(err)
})

const App = express()

App.listen(3000,()=>{
    console.log("sever is running on port 3000!")
})