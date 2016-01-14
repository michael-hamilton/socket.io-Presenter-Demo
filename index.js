var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(require('express').static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

var index = 0;
var numSlides = 10;

io.on('connection', function(socket){
    io.emit('index', index);

    socket.on('prev', function() {
        if(index>0) {
            index--;
            io.emit('index', index);
        }
    });

    socket.on('next', function() {
        if(index+1<numSlides) {
            index++;
            io.emit('index', index);
        }
    });

    socket.on('jump', function(_index) {
        index=parseInt(_index);
        io.emit('index', index);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});