var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// DOC
app.get('/', function (req, res) {
    res.send('Hello from root.');
});

app.listen(port);

console.log('Server started on: http://localhost:' + port);