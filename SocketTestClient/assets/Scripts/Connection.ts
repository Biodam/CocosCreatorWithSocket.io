
import { _decorator, Component, Node } from 'cc';
import { io } from 'socket.io-client';
const { ccclass, property } = _decorator;

@ccclass('Connection')
export class Connection extends Component {

    start() {
        console.log(io);
        console.log(JSON.stringify(io));
        let socket = io("http://localhost:3000");
        // client-side
        socket.on("connect", () => {
            console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        });
    }
}