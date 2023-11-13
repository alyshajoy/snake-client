const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("you have connected!")
  });

  conn.on('data', (data) => {
    // console.log(data.toString());
    console.log("there is data?")
    // client.end();
  });

  return conn;

}

console.log("Connecting...");
connect();