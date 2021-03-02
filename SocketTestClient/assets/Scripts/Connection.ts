
import { _decorator, Component, Node } from 'cc';
import io from 'socket.io-client/dist/socket.io.js';
const { ccclass, property } = _decorator;

@ccclass('Connection')
export class Connection extends Component {

    start() {
        console.log("Starting connection to socket.io server");
        let socket = io("http://localhost:3000",
            {
                withCredentials: true,
                extraHeaders: {
                    "my-custom-header": "abcd"
                },
                transports: ['websocket', 'polling', 'flashsocket']
            });

        // client-side
        socket.on("connect", () => {
            console.log(`Socket.ID: ${socket.id}`); // x8WIv7-mJelg7on_ALbx
        });
    }
}