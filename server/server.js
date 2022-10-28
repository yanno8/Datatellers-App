const express = require('express');
const app = express();
const route = require('./routes/route');
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// localhost port
const PORT = process.env.PORT || 5000

// mongodb connection 
mongoose.connect('mongodb://127.0.0.1:27017/datatellers-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Successful MongoDB Connection !'))
    .catch(() => console.log('Failed MongoDB Connection !'));

// Set body-parser
app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());

// setting pages
app.use(route);

// server listening
server.listen(PORT, () => {
    console.log('Server is listening on *:' + PORT);
});