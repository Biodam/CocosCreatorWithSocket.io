import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';

const app: Express = express();
const server: http.Server = http.createServer(app);
const io: socketio.Server = new socketio.Server();
io.attach(server);

app.get('/hello', async (_: Request, res: Response) => {
    res.send('Hello World')
});

io.on('connection', (socket: socketio.Socket) => {
    console.log('connection');
    socket.emit('status', 'Hello from Socket.io');

    socket.on('disconnect', () => {
        console.log('client disconnected');
    })
});

server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
});