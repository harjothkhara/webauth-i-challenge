//imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express() //initialize server

//middleware
server.use(helmet());
server.use(express.json())
server.use(cors());





module.exports = server


