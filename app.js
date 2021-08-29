const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const swaggerDoc = require('./swaggerJSDoc');
require('dotenv').config();
require('./configs/passport-config');

const {
  authRouter,
  transactionsRouter,
  categoriesRouter,
} = require('./routes/api');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
swaggerDoc(app);

app.use('/api/transactions', transactionsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/users', authRouter);

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
