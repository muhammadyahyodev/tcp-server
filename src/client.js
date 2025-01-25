const net = require('net');

const client = net.createConnection({ host: '127.0.0.1', port: 3500 }, () => {
    console.log('Connected to server');
});

client.on('data', (data) => {
    console.log('Received from server:', data.toString());
});

client.on('error', (err) => {
    console.error('Error:', err);
});

// Klientga foydalanuvchi kiritishini kutish
process.stdin.on('data', (data) => {
    client.write(data.toString());
});
