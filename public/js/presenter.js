var socket = io('/a');
function gotoSlide(index) {
    $('.preview-slide.active').removeClass('active');
    $($('.preview-slide')[index]).addClass('active');


    $('.slide').fadeOut().promise().done(function(){
        $($('.slide')[index]).fadeIn();
    });

}

$('.preview-slide').click(function() {
    socket.emit('jump', $(this).attr('index'));
    return false;
});

$('#prev').click(function(){
    socket.emit('prev');
    return false;
});
$('#next').click(function(){
    socket.emit('next');
    return false;
});
socket.on('index', function(index){
    gotoSlide(index);
    $('#index').text(index+1);
});