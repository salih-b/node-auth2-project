const express = require('express');
const helmet = require('helmet');
const cors = require("cors");


const UsersRouter = require("./users/users-router.js");
const authRouter = require("./auth/auth-router.js");
const authenticator = require("./auth/authenticator.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", authRouter);
server.use('/api', authenticator,  UsersRouter);


server.get("/", (req, res) => {
    res.json({ api: "up!" });
  });
  

module.exports = server;