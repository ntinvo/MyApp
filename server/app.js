const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* ------------------------------ */
/*            Init app            */
/* ------------------------------ */
const app = express();


/* ------------------------------ */
/*              CORS              */
/* ------------------------------ */
app.use(cors());


/* ------------------------------ */
/*           Catch routes         */
/* ------------------------------ */
app.get('/', (req, res) => {
  res.send('root routes');
});


/* ------------------------------ */
/*            Get port            */
/* ------------------------------ */
const port = process.env.PORT || '3000';
app.set('port', port);

/* ------------------------------ */
/*          Create server         */
/* ------------------------------ */
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server is running on localhost:' + port);
});
