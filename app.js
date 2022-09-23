const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send("Succes")
});


let server = app.listen(443, function () {
  console.log("Portal running on port: " + 443);
});

//WebSocket logic. Cleanup later.
let io = require("socket.io")(server);
app.set('io', io);
io.use((socket, next) => {
    next();
   
}).on("connection", function (socket) {
    console.log("New websocket connection")
    socket.on("test", function () {
        socket.emit("test","test")
      });

});
