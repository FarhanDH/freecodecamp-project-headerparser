// index.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
const router = require('./routes/headre-parser.routes');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// API endpoint
app.use('/', router);

// listen for requests :)
const listener = app.listen(3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
