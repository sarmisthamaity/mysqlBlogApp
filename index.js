const express = require('express');
const app = express();
const connection = require('./connection/connect');
const Routers = require('./routes/index');
require('dotenv');
const PORT = 8080

app.use(express.json());
app.use('/', Routers);

app.listen(PORT, () => {
    console.log(`port number is ${PORT}`);
    console.log(`server running on :- http://localhost:${PORT}`);
});