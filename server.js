//imports
const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knexConfig = require('./data/dbConfig.js');
const authRouter = require('./routers/authRouter.js');
const userRouter = require('./routers/userRouter.js');

const server = express() //initialize server

const sessionConfig = {
  name: "monster",
  secret: "keep it secret, keep it safe! -gandalf",
  cookie: {
    maxAge: null,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: knexConfig,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 30 //delete expired sessions
  })
};

//middleware
server.use(helmet());
server.use(express.json())

server.use(session(sessionConfig));
server.use("/auth", authRouter);
server.use("/api/users", userRouter);

//testing server
server.get('/', (req, res) => {
    res.send("It's alive!");
  });


module.exports = server;


