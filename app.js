require("dotenv").config();

const express = require("express");
const cors = require("./config/cors.config");
const path = require("path")
const app = express();

// Express config
app.use(cors);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes config

app.use('/', require('./config/routes'));

// Error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler

app.use(function (error, req, res, next) {
  console.error(error);

  res.status(error.status || 500);

  const data = {}
  data.message = error.message;
  res.json(data);
});

// Port config

const port = normalizePort(process.env.PORT || '5000');
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Normalize port into number, string or false

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
      // named pipe
      return val;
  }
  if (port >= 0) {
      // port number
      return port;
  }
  return false;
}