const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({ // connect to server
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server.");
    conn.write("Name: AJH");

  });

  conn.on('data', (data) => { // log any data that is sent to client
    console.log(data);
  });

  return conn;

};

module.exports = {
  connect
};