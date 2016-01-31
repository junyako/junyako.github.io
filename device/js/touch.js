$(function (){
    $('#ball').on('touchstart',funtion(){
        $('#touchResult li').eq(0).text('touchstartしたよ');
    });
    $('#ball').on('touchmove',funtion(){
        $('#touchResult li').eq(1).text('touchmoveしたよ');
    });
    $('#ball').on('touchend',funtion(){
        $('#touchResult li').eq(2).text('touchendしたよ');
    });
});
