/*模块简介:
 contact模块封装了系统通讯录的相关接口，
 通过此模块可实现对系统通讯录的联系人增删改查操作，
 将底层负责的访问通讯录代码简单成一个个小接口，
 让开发者轻松访问通讯录
 */

/*示例简介:
打开联系人界面,
选中返回联系人信息;
 */

var contact = api.require('contact');
contact.openContact(function(ret,err) {
    if( ! ret.status) {
        api.toast({
            msg: "出错了",
            duration: 1000,
            location: "top"
        });

        return;

        var array = ret.phones;
        var firstnum = array[0];
        var secondnum = array[1];
        var thirdnum = array[2];
    }

    api.alert({
        title: "联系人",
        msg: JSON.stringify(ret)
    });
});