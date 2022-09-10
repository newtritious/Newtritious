const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const routes = require('./routes');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env')});
require('./db/mongoose');

// Declare value for PORT
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Production server runs this code when config var is present
if (process.env.PRODUCTION_URL) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

// Routes defined here
app.use(routes);

// Set Express server to listen on PORT
app.listen(PORT, () => {
  console.log(`🌍 Server running on http://localhost:${PORT}`);
});
