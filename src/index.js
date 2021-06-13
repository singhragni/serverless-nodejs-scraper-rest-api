const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var indexRouter = require('./routes/index');

app.use('/',indexRouter)


module.exports = app;
