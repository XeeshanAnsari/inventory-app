const http = require('http');
const app = require('./app');

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);


app.listen(port, () => {
    console.log('Running Port', port)
})