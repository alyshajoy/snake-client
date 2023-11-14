const { MOVES } = require("./constants.js");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // get info on what keys were pressed
  return stdin;
};

const handleUserInput = function(key) { // function that binds keys to specific actions
  if (key === '\u0003') {
    process.exit();
  }
  const moveCommand = MOVES[key]; // will be undefined if key is not in MOVES object
  if (moveCommand) { // if not undefined, will send action listed in MOVES object to server
    connection.write(moveCommand);
  }

};

module.exports = { setupInput };