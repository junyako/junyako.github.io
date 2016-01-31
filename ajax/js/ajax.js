$(function(){
    $('#btn').on('click',function(){
        //ajaxでよみこみ
        $.ajax({
            url:'/Users/kobayashijunya/Documents/workspace/junyako.github.io/ajax/mydata.json',
            type:'GET',
            dataType:'json'
        }).done(function(){
            showContent(data);

        }).fail(function(){
            console.log("えらー");
        });

    });

    function showContent(data) {
        //$('#container').append(data);

        for(var cnt =0; cnt < data.length; cnt++){
            $('#container li').eq(cnt)
.text(data[cnt].name);        }
    }

});
