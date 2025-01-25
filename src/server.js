const net = require('net');
const clients = [];

const server = net.createServer((socket) => {
    console.log('Client connected');
    clients.push(socket);

    socket.on('data', (data) => {
        console.log('Received from client:', data.toString());
        // Barcha klientlarga xabarni yuborish
        clients.forEach(client => {
            if (client !== socket) {
                client.write(data);
            }
        });
    });

    socket.on('end', () => {
        console.log('Client disconnected');
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });

    socket.on('error', (err) => {
        console.error('Error:', err);
    });
});

server.listen(3500, () => {
    console.log('Server is listening on port 3500');
});
