const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const path = require('path');
require('dotenv').config(); 


// INITIALIZATIONS
const app = express();
require('./database');


// SETTINGS
app.set('port', process.env.PORT || 9000);


// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));


// ROUTES
app.use('/api/rooms', require('./routes/rooms.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/customers', require('./routes/customer.routes'));


module.exports = app;