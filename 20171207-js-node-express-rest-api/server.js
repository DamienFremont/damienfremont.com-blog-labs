var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API
app.use('/api', require('./api/userListRoutes'));

// DOC
app.get('/', function (req, res) {
    res.send('Hello from root route. (please use /api)');
});

app.listen(port);

console.log('user list RESTful API server started on: http://localhost:' + port);