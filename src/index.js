const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
var indexRouter = require('./routes/index');

app.use('/',indexRouter)

app.use(bodyParser.json());
module.exports = app;
