//imports
const express = require('express');
const helmet = require('helmet');
const userRouter = require("./routers/userRouter.js");
const loginRouter = require("./routers/loginRouter.js")

const server = express() //initialize server

//middleware
server.use(helmet());
server.use(express.json())

server.use("/api/register", userRouter)
server.use("/api/login", loginRouter)

//testing server
server.get('/', (req, res) => {
    res.send("It's alive!");
  });


module.exports = server


