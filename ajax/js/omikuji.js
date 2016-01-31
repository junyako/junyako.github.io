var omikuji = [
    {
        result: ' 大吉',
        love: ' 整う',
        business: ' 成功'
    }
    ,
    {
        result:' 吉',
        love:' 耐える',
        business:' 動くな'
    }
    ,
    {
        result:' 凶',
        love:' 別れる',
        business:' 失敗'
    }
]




$(function() {
    $('#btn').on('click',function(){
        var randNum = Math.floor(Math.random() * 3);
        console.log(randNum);
        $('.resultKekka').text(omikuji[randNum].result);
        $('.resultLove').text(omikuji[randNum].love);
        $('.resultBusiness').text(omikuji[randNum].business);

    });
});
