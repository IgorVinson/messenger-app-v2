import io from 'socket.io-client';

export const runSocket = () => {

    const socket = io('http://localhost:8080');

    socket.on('connect', () => {
        console.log('Socket.IO connection established!');
    });

    // socket.on('message', (data) => {
    //     console.log('Received message:', data);
    // });

    socket.emit('message', 'Hello, server!');
    return socket;
}


