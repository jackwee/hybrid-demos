function dial(){
    var num = $api.byId('telNum').value;
    api.call({
        type: 'tel',
        number: num
    });
}
function send(){
    var smsNum = $api.byId('smsNum').value;
    var txt = $api.byId('smsTxt').value;
    api.sms({
        numbers: [smsNum],
        text: txt
    });
}