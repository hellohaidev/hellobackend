const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const attitudeRouter = require('./routes/attitude')
const providerRouter = require('./routes/provider')
const fasilitatorRouter = require('./routes/fasilitator')
const mapsRouter = require('./routes/maps')
const usersRouter = require('./routes/users');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/attitude', attitudeRouter);
app.use('/provider', providerRouter);
app.use('/fasilitator', fasilitatorRouter);
app.use('/fasilitator', fasilitatorRouter);
app.use('/map',mapsRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT ||  5000, function () {
    console.log("app running on port.", process.env.PORT || 5000);
});

module.exports = app;