const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbconfig = require('./db/config');

// Get routes
const users = require('./routes/users');
const api = require('./routes/api');

// Init app
const app = express();

// Connect to database
mongoose.connect(dbconfig.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database.')
});
mongoose.connection.on('error', (error) => {
  console.log('There is a problem connecting to the database. Error: ' + error);
});

// CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, '../public')));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set routes
app.use('/users', users);
app.use('/api', api);

// Catch routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Get port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create server and listen on port
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server is running on localhost:' + port);
});
