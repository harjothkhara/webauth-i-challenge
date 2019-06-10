//imports
const express = require('express');
const helmet = require('helmet');
const userRouter = require("./routers/userRouter.js");

const server = express() //initialize server

//middleware
server.use(helmet());
server.use(express.json())

server.use("/api/register", userRouter)

//testing server
server.get('/', (req, res) => {
    res.send("It's alive!");
  });


module.exports = server


