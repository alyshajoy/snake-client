// const net = require("net");
const client = require("./client.js");

console.log("Connecting...");
client.connect();
client.setupInput();