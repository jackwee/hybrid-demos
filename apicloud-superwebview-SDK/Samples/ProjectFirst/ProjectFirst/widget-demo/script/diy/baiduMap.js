var zoomEnable = false,
    isadd = true,
    scrollEnable = false,
    showsUserLocation = false,
    mapType = 0,
    zoomLevel = $api.byId('zoomLevel'),
    mapTypeArr = ['standard','trafficOn','satellite','trafAndsate'],
    routeType = 0,
    routeTypeArr = ['drive','transit','walk'],
    startArr = ['史各庄','天安门','北京师范大学'],
    trackMode = ['none','follow','compass'],
    trackType = 0;
apiready = function() { //加载地图
    var y = "45";
    /* iOS7+ 需要单独布局. */
    (function() {
        var t = api.systemType;
        if ("ios" == t) {
            var n = api.systemVersion, r = parseInt(n, 10), o = api.fullScreen, i = api.iOS7StatusBarAppearance;
            if(r >= 7 && !o && i){ //!< iOS 7 + 系统,同时又指定了使用iOS风格的状态栏.
                y = "64";
            }
        }
    })();

    var obj = api.require('baiduMap');
    obj.open(
        {
            x: '0',
            y: y,
            width: api.winWidth,
            height: (api.winHeight/2-50)
        },function(ret,err){}
    );
}
function switchFrame(index) {

    var list = document.querySelectorAll('#navList li');

    for(var i=0,l = list.length;i<l;i++){ // 简答的策略: 先去除所有样式.
        list[i].setAttribute('class','');
    }

    list[index].setAttribute('class','currPageStatus');

    var tab1=$api.byId('tabBaseType');
    var tab2=$api.byId('tabTipsType');
    var tab3=$api.byId('tabSearchType');
    if (index==0) {
        $api.removeCls(tab1,'hide');

        if( ! $api.hasCls(tab2,'hide')){
            $api.addCls(tab2,'hide')
        }

        if( ! $api.hasCls(tab3,'hide')){
            $api.addCls(tab3,'hide')
        }
    }
    else if (index==1) {
        $api.removeCls(tab2,'hide');

        if( ! $api.hasCls(tab1,'hide')){
            $api.addCls(tab1,'hide')
        }

        if( ! $api.hasCls(tab3,'hide')){
            $api.addCls(tab3,'hide')
        }
    }
    else if (index==2) {
        $api.removeCls(tab3,'hide');

        if( ! $api.hasCls(tab1,'hide')){
            $api.addCls(tab1,'hide')
        }

        if( ! $api.hasCls(tab2,'hide')){
            $api.addCls(tab2,'hide')
        }
    }
}

var selbox = document.querySelectorAll('.selectList');
for (var i = 0, len = selbox.length; i < len; i++) {
    selbox[i].ind = i;
    selbox[i].onclick = function() {
        if (this.getAttribute('flag') == 'false') {
            this.setAttribute('flag', 'true');
            this.parentNode.style.background = '#9abb82';
            this.style.right = '0';
        } else { //true
            this.setAttribute('flag', 'false');
            this.parentNode.style.background = '#a5a39d';
            this.style.right = '43%';
        }
        execAction(this.ind,this.getAttribute('flag'));
    }
};

function execAction(ind,flag){
    flag=ConvertValue(flag);
    if (ind==0) {//隐藏
        if (flag==true) {
            setMapHiddene();
        }else{
            setMapHidden();
        }
    }
    else if (ind==1) {//缩放
        setMapZoomEnable(flag);
    }
    else if (ind==2) {//平移
        setMapScrollEnable(flag);
    };
}

function ConvertValue(val){
    var _val=true;
    if (val=='true') {
        _val=true;
    }else{
        _val=false;
    }
    return _val;
}

var isadd = true,
    showsUserLocation = false,
    zoomLevel = $api.byId('zoomLevel'),
    mapShowType = $api.byId('mapShowType'),
    routeType = 0,
    routeTypeArr = ['drive', 'transit', 'walk'],
    startArr = ['史各庄', '天安门', '北京师范大学'],
    trackMode = ['none', 'follow', 'compass'],
    trackType = 0;

function closeBaiduMap() {
    var obj = api.require('baiduMap');
    obj.close({});
};

function setMapType() {
    var obj = api.require('baiduMap');
    obj.setType({
        mapType: $api.val(mapShowType)
    });
};

function startCurrentLocation() {
    var obj = api.require('baiduMap');
    var acc = $api.byId('accuracy');
    acc = acc.options[acc.selectedIndex].value;
    var auto = $api.byId('autoStop');
    auto = auto.options[auto.selectedIndex].value;
    var filDou = $api.byId('filDou');
    filDou = parseFloat(filDou.value);

    if (auto == 'true') {
        auto = true;
    } else {
        auto = false;
    };

    obj.startLocation({
            accuracy: acc,
            filter: filDou,
            autoStop: auto
        },
        function(ret, err) {
            if (ret.status) {
                document.getElementById("baidu_long").value = ret.longitude;
                document.getElementById("baidu_lat").value = ret.latitude;
            } else {
                api.alert({
                    msg: err.msg
                });
            }
        }
    );
}

function stopCurrentLocation() {
    var obj = api.require('baiduMap');
    obj.stopLocation();
};

function getUserCurrentLocation() {
    var obj = api.require('baiduMap');
    obj.getLocation({},
        function(ret, err) {
            if (ret) {
                api.alert({
                    title: '经纬度',
                    msg: ret.longitude + '*' + ret.latitude + '*' + ret.timestamp,
                    buttons: ['确定']
                });
            } else {
                api.alert({
                    msg: '获取失败'
                })
            };
            //document.getElementById("baidu_stamp").value = ret.timestamp;
            document.getElementById("baidu_long").value = ret.longitude;
            document.getElementById("baidu_lat").value = ret.latitude;
        });
};

function getBaiduMapCoordFromGoogle() {
    var obj = api.require('baiduMap');
    obj.getBaiduFromGoogle({
        lon: '116.297',
        lat: '40.109'
    }, function(ret, err) {
        api.alert({
            title: '百度坐标是',
            msg: ret.lon + '*' + ret.lat,
            buttons: ['确定']
        })
    });
}

function setMapCenter() {
    var obj = api.require('baiduMap');
    obj.setCenter({
        lon: document.getElementById("baidu_long").value,
        lat: document.getElementById("baidu_lat").value
    });
};

function setMapZoomLevel() {
    var obj = api.require('baiduMap');
    var zoom = zoomLevel.value || 9;
    obj.setZoomLevel({
        level: zoom
    });
};

function setMapZoomEnable(zoomEnable) {
    var obj = api.require('baiduMap');
    obj.setZoomEnable({
        enable: zoomEnable
    });
    // if (zoomEnable) {
    //     zoomEnable = false;
    // } else {
    //     zoomEnable = true;
    // };
    // alert('zoomEnable '+zoomEnable);
};

function setMapScrollEnable(scrollEnable) {
    var obj = api.require('baiduMap');
    obj.setScrollEnable({
        enable: scrollEnable
    });
    // if (scrollEnable) {
    //     scrollEnable = false;
    // } else {
    //     scrollEnable = true;
    // };
    // alert('scrollEnable '+scrollEnable);
};

function setMapHidden() {
    //alert('地图将隐藏');
    var obj = api.require('baiduMap');
    obj.setHidden({
        hidden: true
    });
};

function setMapHiddene() {
    //alert('地图将显示');
    var obj = api.require('baiduMap');
    obj.setHidden({
        hidden: false
    });
};
function addLongPressGestures(){
    var obj = api.require('baiduMap');
    obj.longPressGesture({
        add:true
    },function(ret,err){
        api.alert({msg:ret.lon+"*"+ret.lat});
    });
}
function setShowsUserLocation() {
    trackType++;
    if (trackType == 3) {
        trackType = 0;
    };

    var obj = api.require('baiduMap');
    obj.showUserLocation({
        isShow: true,
        trackingMode: trackMode[trackType]
    });
    if (showsUserLocation) {
        showsUserLocation = false;
    } else {
        showsUserLocation = true;
    };

};

function zoomMapOut() {
    var obj = api.require('baiduMap');
    obj.zoomOut({});
};

function zoomMapIn() {
    var obj = api.require('baiduMap');
    obj.zoomIn({});
};

function addMapAnnotations() {
    var obj = api.require('baiduMap');
    obj.addAnnotations({
        annoArray: [{
            id: 1,
            lon: '116.297',
            lat: '40.109',
            title: '第一个',
            subTitle: '子标题'
        }, {
            id: 2,
            lon: '116.298',
            lat: '40.109',
            title: '第二个',
            subTitle: '子标题'
        }, {
            id: 3,
            lon: '116.298',
            lat: '40.11',
            title: '第三个',
            subTitle: '子标题'
        }, {
            id: 4,
            lon: '116.297',
            lat: '40.11',
            title: '第四个',
            subTitle: '子标题'
        }]
    }, function(ret, err) {
        api.alert({
            title: 'bubble',
            msg: '用户点击了第' + ret.cbBubbleID + '个大头针',
            buttons: ['确定']
        });
    });
};

function setMapBubbleStyle() {
    var obj = api.require('baiduMap');
    obj.setBubbleStyle({
        bubbleBgimg: 'widget://image/bubble_bg.png',
        imgPath: 'widget://image/bubble_head.png',
        id: '2',
    });
};

function addMapMarks() {
    var obj = api.require('baiduMap');
    obj.addMarks({
        marks: [{
            id: 5,
            lon: '116.297',
            lat: '40.099',
            title: '第一个',
            subTitle: '子标题'
        }, {
            id: 6,
            lon: '116.31',
            lat: '40.099',
            title: '第二个',
            subTitle: '子标题'
        }, {
            id: 7,
            lon: '116.31',
            lat: '40.105',
            title: '第三个',
            subTitle: '子标题'
        }, {
            id: 8,
            lon: '116.297',
            lat: '40.105',
            title: '第四个',
            subTitle: '子标题'
        }]
    }, function(ret, err) {
        api.alert({
            title: 'marks',
            msg: '用户点击了第' + ret.markID + '个标记气泡',
            buttons: ['确定']
        });
    });
};

function setMapMarkStyle() {
    var obj = api.require('baiduMap');
    obj.setMarkStyle({
        bgImg: 'widget://image/mark_bg_test.png',
        headImg: 'widget://image/mark_test.png',
        id: '6',
    });
};

function removeMapAnnotations() {
    var obj = api.require('baiduMap');
    obj.removeAnnotations({
        idArray: ['1', '3', '5', '7']
    });
};

function addMapLine() {
    var obj = api.require('baiduMap');
    obj.addLine({
        style: {
            id: '100',
            fillColor: '#FF0000',
            strokeColor: '#990033',
            lineWidth: '3'
        },
        pointArray: [{
            lon: '116.297',
            lat: '40.109'
        }, {
            lon: '116.298',
            lat: '40.109'
        }, {
            lon: '116.298',
            lat: '40.11'
        }]
    });
};

function addMapCircle() {
    var obj = api.require('baiduMap');
    obj.addCircle({
        id: '101',
        lon: '116.298',
        lat: '40.11',
        radius: '500',
        fillColor: '#FF0000',
        strokeColor: '#990033',
        lineWidth: '3'
    });
};

function addMapPolygon() {
    var obj = api.require('baiduMap');
    obj.addPolygon({
        style: {
            id: '102',
            fillColor: '#FF0000',
            strokeColor: '#990033',
            lineWidth: '3'
        },
        pointArray: [{
            lon: '116.297',
            lat: '40.109'
        }, {
            lon: '116.298',
            lat: '40.109'
        }, {
            lon: '116.298',
            lat: '40.11'
        }]
    });
};

function addMapOverMark() {
    var obj = api.require('baiduMap');
    obj.addOverMark({
        id: '200',
        lbLon: '116.297',
        lbLat: '40.109',
        rtLon: '116.298',
        rtLat: '40.11',
        imgPath: 'widget://image/mark_test.png'
    });
};

function removeMapOverlay() {
    var obj = api.require('baiduMap');
    obj.removeOverlay({
        idArray: ['100', '101', '102', '200']
    });
};

function addMapRoute() {
    var obj = api.require('baiduMap');
    obj.addRoute({
        id: 300 + routeType,
        type: routeTypeArr[routeType],
        startPoint: {
            city: '北京',
            name: startArr[routeType],
            lon: '',
            lat: ''
        },
        endPoint: {
            city: '北京',
            name: '龙翔路甲1号',
            lon: '116.384767',
            lat: '39.989539'
        }
    }, function(ret, err) {
        if (ret.status) {
            alert("路线添加完成");
        } else {
            alert(err.msg);
        }
    });
    routeType++;
    if (routeType == 3) {
        routeType = 0;
    };
};

function removeMapRoute() {
    var obj = api.require('baiduMap');
    obj.removeRoute({
        idArray: ['300', '301', '302']
    });
};

function addMapLongPressGesture() {
    var obj = api.require('baiduMap');
    obj.addLongPressGesture({
        add: isadd
    }, function(ret, err) {
        api.alert({
            title: '长按地图得经纬度',
            msg: ret.lan + '*' + ret.lat,
            buttons: ['确定']
        });
    });

    if (isadd) {
        isadd = false;
    } else {
        isadd = true;
    };
};

function searchMapInCity() {
    var city = $api.byId('baidu_city').value;
    var key = $api.byId('baidu_poiname').value;
    var index = $api.byId('baidu_index').value;
    var obj = api.require('baiduMap');
    obj.searchInCity({
        city: city,
        key: key,
        pageIndex: index
    }, function(ret, err) {
        if (ret.status) {
            api.alert({
                title: 'InCity搜索结果总条数',
                msg: ret.totalNum,
                buttons: ['确定']
            });
            document.getElementById("searcInCityResult").innerHTML = ret.totalNum;
        } else {
            api.alert({
                title: '搜索错误代码',
                msg: err.msg,
                buttons: ['确定']
            });
        }
    });
};

function searchMapNearBy() {
    var obj = api.require('baiduMap');
    obj.searchNearBy({
        key: 'KTV',
        lon: '116.384767',
        lat: '39.989539',
        radius: '2000',
        pageIndex: '0'
    }, function(ret, err) {
        if (ret.status) {
            api.alert({
                title: 'NearBy搜索结果总条数',
                msg: ret.totalNum,
                buttons: ['确定']
            });
            document.getElementById("searchNearby").innerHTML = ret.totalNum;
        } else {
            api.alert({
                title: '搜索错误代码',
                msg: err.msg,
                buttons: ['确定']
            });
        }
    });
};

function searchMapInBounds() {
    var obj = api.require('baiduMap');
    obj.searchInBounds({
        key: 'KTV',
        lbLon: '116.384767',
        lbLat: '39.989539',
        rtLon: '116.484767',
        rtLat: '40.089539',
        pageIndex: '0'
    }, function(ret, err) {
        if (ret.status) {
            api.alert({
                title: 'InBounds搜索结果总条数',
                msg: ret.totalNum,
                buttons: ['确定']
            });
            document.getElementById("searchInbounds").innerHTML = ret.totalNum;
        } else {
            api.alert({
                title: '搜索错误代码',
                msg: err.msg,
                buttons: ['确定']
            });
        }
    });
};

function searchMapSuggestion() {
    var obj = api.require('baiduMap');
    obj.suggestionSearch({
        key: '书店',
    }, function(ret, err) {
        if (ret.status) {
            api.alert({
                title: '搜索结果multiSearchInBounds',
                msg: 'dsf',
                buttons: ['确定']
            });
            document.getElementById("searchSuggestion").innerHTML = 'ksjf';
        } else {
            api.alert({
                title: '搜索错误代码',
                msg: err.msg,
                buttons: ['确定']
            });
        }
    });
};

function getMapLonAndLatFromName() {
    var obj = api.require('baiduMap');
    obj.getLocationFromName({
        city: '北京',
        address: '泰翔商务楼'
    }, function(ret, err) {
        if (ret.status) {
            api.alert({
                title: '搜索结果getLonAndLatFromName',
                msg: ret.lon + '*' + ret.lat,
                buttons: ['确定']
            });
            document.getElementById("getlatandlonSuggestion").innerHTML = ret.lon + '*' + ret.lat;
        } else {
            api.alert({
                title: '搜索错误代码',
                msg: err.msg,
                buttons: ['确定']
            });
        }
    });
};

function getMapAddFromLonAndLat() {
    var obj = api.require('baiduMap');
    obj.getNameFromLocation({
        lon: '116.384767',
        lat: '39.989539'
    }, function(ret, err) {
        if (ret.status) {
            api.alert({
                title: '搜索结果getAddFromLonAndLat',
                msg: ret.add,
                buttons: ['确定']
            });
            document.getElementById("getMapAddFromLonAndLat").innerHTML = ret.add;
        } else {
            api.alert({
                title: '搜索错误代码',
                msg: err.msg,
                buttons: ['确定']
            });
        }
    });
};

function getMapBusInfoFromNum() {
    var obj = api.require('baiduMap');
    obj.getBusRouteFromLineNum({
        city: '北京市',
        line: '345路'
    }, function(ret, err) {
        if (ret.status) {
            api.alert({
                title: '搜索结果getLonAndLatFromName',
                msg: ret.busName + '*' + ret.company + '*' + ret.startTime + '*' + ret.endTime,
                buttons: ['确定']
            });
            document.getElementById("getMapBusInfoFromNum").innerHTML = ret.busName + '*' + ret.company + '*' + ret.startTime + '*' + ret.endTime;
        } else {
            api.alert({
                title: '搜索错误代码',
                msg: err.msg,
                buttons: ['确定']
            });
        }
    });
};

function removeMapBusRoute() {
    var obj = api.require('baiduMap');
    obj.removeBusRoute({});
};