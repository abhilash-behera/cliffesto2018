var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.set('port', port);

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(app.get('port'), function(err) {
    if (err) {
        console.log('Error in starting server: ' + err);
    } else {
        console.log('Server started successfully on port: ' + app.get('port'));
    }
});