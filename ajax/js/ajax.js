$(function (){
    $('#btn').on('click',function(){
        //ajaxでよみこみ
        $.ajax({
            url:'omikuji.html',
            type:'GET',
            dataType:'html'
        }).done(function(data){
            console.log(data);
        }).fail(function(){
            console.log("えらー");
        });

    });

});
