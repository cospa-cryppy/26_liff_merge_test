
$(function () {
    // 送信
    $('form').submit(function () {
        var apikey = $('input[name="apikey"]').val();
        var apisecret = $('input[name="apisecret"]').val();
        
        var msg = `APIキー送信フォーム\nAPI_KEY：${apikey}\nAPI_SECRET：${apisecret}`;
        sendText(msg);

        return false;
    });
});
