/*
 打开一个日历;
 2014年的法定节假日标记为 specialDate;
 2014.9.15 标记为 specialDate;
 点击 日历 非specialDate,会提示点击日期与当前日期的间隔;
 点击 specialData 会提示节日名称和距离当前日期的间隔;
 */

var calendar = api.require('calendar');

/* 记录法定节假日信息. */
var holidayInfo = {
    元旦: ["2014-01-01"],
    春节: ["2014-01-31", "2014-02-01", "2014-02-02", "2014-02-03","2014-02-04",
        "2014-02-05", "2014-02-06"],
    清明节: ["2014-04-05","2014-04-06","2014-04-07"],
    劳动节: ["2014-05-01", "2014-05-02", "2014-05-03"],
    端午节: ["2014-06-02", "2014-06-03", "2014-06-04"],
    中秋节: ["2014-09-08", "2014-09-09", "2014-09-10"],
    国庆节: ["2014-10-01",  "2014-10-02","2014-10-03", "2014-10-04", "2014-10-05",
        "2014-10-06", "2014-10-07"]
};

var specialDate = [];

for(var prop in holidayInfo){
    var dates = holidayInfo[prop];
    Array.prototype.push.apply(specialDate, dates);
}

specialDate.push("2014-09-15");

/* 打开日历. */
calendar.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight,
    "specialDate": specialDate,
    fixedOn: api.frameName
},function(ret,err){
    if( ! ret){ /* 出错了,默默返回.*/
        return;
    }

    var dateClick = ret.date;

    var todayDate = (function () {
        var now = new Date();

        todadyDate = now.getFullYear() + "-" + ((now.getMonth() + 1) < 10 ? "0" : "") +
            (now.getMonth() + 1) + "-" + (now.getDate() < 10 ? "0" : "") + now.getDate();

        return todadyDate;
    })();

    function StringToDate(DateStr){ /* 字符串转日期.*/
        var converted = Date.parse(DateStr);
        var myDate = new Date(converted);
        if (isNaN(myDate))
        {
            var arys= DateStr.split('-');
            myDate = new Date(arys[0],--arys[1],arys[2]);
        }
        return myDate;
    }

    var diff = parseInt((StringToDate(dateClick) - StringToDate(todayDate)) / 86400000);

    /* 将日期与节日关联起来. */

    /* 是不是 APICloud 上线的日子 ?*/
    if ("2014-09-15" == dateClick) {
        dateClick += " APICloud上线"
    }

    /* 是不是某个特殊节日?*/
    for(var prop in holidayInfo){
        var dates = holidayInfo[prop];

        var isExist = false;

        for(var idx in dates){
            var date = dates[idx];
            if(dateClick == date){
                dateClick +=  " " + prop;
                isExist = true;
                break;
            }
        }

        if(isExist){
            break;
        }
    }

    if(0 == diff){ /* 现在.*/
        msg = "今天是: " + dateClick;
    }

    if(diff > 0){ /* 未来.*/
        msg = "距离 " + dateClick + " 还有 " + diff + " 天"
    }

    if(diff < 0 ){ /* 过去.*/
        msg = dateClick + " 已过去 " + Math.abs(diff) + " 天";
    }

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});