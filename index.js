const http = require('http');

// const router  = require('./routes/index')

const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer();


server.listen(PORT, ()=>{
    console.log(`server started on port ${PORT} `)
})