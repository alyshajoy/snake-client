const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server.");
    conn.write("Name: AJH");

  });

  conn.on('data', (data) => {
    console.log(data)
  });

  return conn;

}

module.exports = {
  connect
};