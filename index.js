//big update lol

const { escape } = require("querystring");
const express = require("express");
const socketio = require("socket.io");

const port = 8080; //if you want to change port, here
var app = express();

require('./middle_mod.js').forEach(f=>{
    app.use(f);
})

// static file system
app.use(express.static('./main'));

app.listen(port,()=>{
    console.log("Server running at localhost");
})