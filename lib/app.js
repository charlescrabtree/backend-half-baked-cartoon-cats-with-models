const express = require('express');
const { dirname } = require('path');
const path = require('path');
const { nextTick } = require('process');
const app = express();

// Built in middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// App routes

app.use('/cats', require('./controllers/cats'));

app.use('/my-middleware', (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('i am in the middleverse');
  next({ message: 'this is an error' });
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
