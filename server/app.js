const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbconfig = require('./db/config');

// Authentication
var session = require('express-session');
var passport = require('passport');

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

// Cookie parser
app.use(cookieParser());


// Set routes
app.use('/users', users);
app.use('/api', api);

// Catch routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// Get port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create server and listen on port
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server is running on localhost:' + port);
});
