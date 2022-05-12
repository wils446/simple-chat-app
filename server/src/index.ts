import http from "http";
import { Server } from "socket.io";

async function main() {
    const server = http.createServer();
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("a user connected");
    });

    server.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}

main();
