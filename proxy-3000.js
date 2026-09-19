const http = require('http');
const net = require('net');

const server = http.createServer((req, res) => {
  const headers = { ...req.headers };
  headers.host = '127.0.0.1:3001';

  const options = {
    hostname: '127.0.0.1',
    port: 3001,
    path: req.url,
    method: req.method,
    headers: headers,
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', () => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Dev server starting, please refresh in a moment...');
  });

  req.pipe(proxyReq, { end: true });
});

server.on('upgrade', (req, socket, head) => {
  const proxySocket = net.connect(3001, '127.0.0.1', () => {
    proxySocket.write(head);
    socket.pipe(proxySocket);
    proxySocket.pipe(socket);
  });

  proxySocket.on('error', () => {
    socket.destroy();
  });

  socket.on('error', () => {
    proxySocket.destroy();
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Dual-port proxy active: http://localhost:3000 -> http://localhost:3001');
});
