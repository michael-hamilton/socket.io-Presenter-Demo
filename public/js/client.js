var socket = io('/a');
function gotoSlide(index) {
    $('.preview-slide.active').removeClass('active');
    $($('.preview-slide')[index]).addClass('active');


    $('.slide').fadeOut().promise().done(function(){
        $($('.slide')[index]).fadeIn();
    });

}
socket.on('index', function(index){
    gotoSlide(index);
    $('#index').text(index+1);
});