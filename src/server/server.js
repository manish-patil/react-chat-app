var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var path = require("path");

var publicPath = path.join(__dirname, "../../public");
var app = express();

var server = http.createServer(app);
var io = socketIO.listen(server);
var port = process.env.PORT || 3000;

io.on("connection", (socket) => {
    console.log("[Server] - ", "New User connected.");

    socket.emit("connected", "[Server] - New User connected....");

    socket.on("NEW_CHAT_CREATED", (chatPayload) => {
        console.log("[Server] - ", "New Chat Messages received at server.");

        socket.broadcast.emit("NEW_CHAT_RECEIVED", chatPayload);  
        // io.emit("NEW_CHAT_RECEIVED", chatPayload);
    })

    // NEW_CHAT_CREATED
    // USER_TYPING

    socket.on("disconnect", () => {
        console.log("[Server] - ", "User disconnected.");
    })
});

app.use(express.static(publicPath));

app.get("/*", (req, res) => {
    res.sendFile(publicPath + "/index.html", (err) => {
        if (err) {
            res.status(500).send(err);
        }

    });
})

server.listen(port, () => {
    console.log("[Server] - ", "Server started at port 3000");
})