var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(require('express').static(__dirname + '/public'));


app.get('/presenter', function(req, res){
    var index = 0;
    var numSlides = 10;

    var nsp = io.of('/a');
    nsp.emit('index', 0);

    nsp.on('connection', function(socket){
        socket.emit('index', index);

        socket.on('prev', function() {
            if(index>0) {
                index--;
                nsp.emit('index', index);
            }
        });

        socket.on('next', function() {
            if(index+1<numSlides) {
                index++;
                nsp.emit('index', index);
            }
        });

        socket.on('jump', function(_index) {
            index=parseInt(_index);
            nsp.emit('index', index);
        });
    });
    res.sendfile('presenter.html');
});

app.get('/', function(req, res){
    res.sendfile('index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});