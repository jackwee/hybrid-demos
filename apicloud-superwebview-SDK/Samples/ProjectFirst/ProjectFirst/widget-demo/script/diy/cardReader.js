function openCardReader()
{
    var iaf = api.require('cardReader');
    iaf.open({
        },function(ret,err){
            if(ret.status)
            {
                alert(ret.cardNum+ret.expiryMonth+ret.expirtyYear+ret.cvv);
            }else
            {
                if("undefined" != typeof(err)){
                    alert(err.msg);
                }
            }
        }
    );
};