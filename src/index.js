require("dotenv").config()
const express = require("express")
const server =  express()
const morgan = require("morgan")
const reqRouter = require("../src/routes/req")

server.use(express.json())
server.use(morgan("tiny"))
server.set("view engine", "ejs")
server.use(express.urlencoded({extended: false}))
server.use("/",reqRouter.router)

server.listen(process.env.port, ()=>{
    console.log("Port Connected");
})