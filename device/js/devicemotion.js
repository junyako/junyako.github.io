$(function (){
    window.addEventListener('devicemotion',shakeDevice);

    function shakeDevice(evt){
        var x = evt.acceleration.x;
        var y = evt.acceleration.y;
        var z = evt.acceleration.z;

        $('#device li').eq(0).text('加速度' +  x);
        $('#device li').eq(1).text('加速度' +  y);
        $('#device li').eq(2).text('加速度' +  z);

        if(Math.abs(X) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15) {
            $('#result').text('振ったね');
        }

    }
});
