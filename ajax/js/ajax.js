$(function (){
    $('#btn').on('click',function(){
        //ajaxでよみこみ
        $.ajax({
            url:'mydata.json',
            type:'GET',
            dataType:'json'
        }).done(function(data){
            console.log(data);

        }).fail(function(){
            console.log("えらー");
        });

    });

    function showContents(data) {
        $('#container').append(data);
    }

});
