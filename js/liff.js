$(document).ready(function () {

    var liffId = "1656097351-pEeljR21";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
        sendMessages(text);
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    initializeLiff(liffId);
    if(!liff.isLoggerdIn()){
        liff.login();;
    }
    liff.sendMessages([{
        'type': 'text',
        'text': "以下の内容でお申込みを受付けました。"
    },{
        'type': 'text',
        'text': text
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
