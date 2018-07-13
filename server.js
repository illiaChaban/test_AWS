const express = require('express');
const http = require('http');

const app = express();
app.use(express.static('static'))

const server = http.createServer(app)

const port = 3001;
console.log(`HTTP server running at http://localhost:${port}`);
server.listen(port);