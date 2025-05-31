import express from 'express'

const App = express()

App.listen(3000,()=>{
    console.log("sever is running on port 3000!")
})