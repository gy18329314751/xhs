/**
 * Created by Administrator on 2018/8/30.
 */
window.onload = function(){
    var oBox2_two = document.getElementById("box2-two");
    var str = '';
    var str1 = ['吃穿玩乐的日常','全世界的好东西','标记我的生活','明星生活另一面']
    var str1Len = str1.length;
    var str1Num = 0;
    var Nmu = 0 ;
    setInterval(function(){
        str +=str1[str1Num].charAt(Nmu);
        Nmu++;
        if(Nmu>str1[str1Num].length){
            str1Num++;
            Nmu = [];
            str = "";
        }
        if(str1Num>3){
            str1Num = 0
        };
       oBox2_two.innerHTML =str;
    },300);



  var aKuai =document.querySelectorAll('.box3 .box3-one .box3-one1');
  var abian =document.querySelectorAll('.box3 .box3-tow ul li img');
  var box3 =document.querySelector('.box3-one');
  var num=-1;
    for (var i = 0; i < aKuai.length; i++) {
        aKuai[i].index=i;
        aKuai[i].onclick=function(){
            for (var j = 0; j < abian.length; j++) {
                abian[j].style.display='none';
                aKuai[j].classList.remove("now");
            }
            abian[this.index].style.display='block';
            aKuai[this.index].classList.add("now");
            num=this.index;
        }
    }


    timer();
    var move;
    function timer(){
        move=setInterval(function () {
            if(num<abian.length-1){
                num++;
            }else{
                num=0;
            }
            for (var j = 0; j < abian.length; j++) {
                abian[j].style.display='none';
                aKuai[j].classList.remove("now");
            }
            abian[num].style.display='block';
            aKuai[num].classList.add("now");
        },3000);
    }

    box3.onmouseover= function () {
        clearInterval(move);
    };
    box3.onmouseout= function () {
        timer();
    };






            //创建和初始化地图函数：
        function initMap(){
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMarker();//向地图中添加marker
        }

//创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.348084,40.091321);//定义一个中心点坐标
        map.centerAndZoom(point,14);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }

//地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }

//地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }

//标注点数组
    var markerArr = [{title:"我的标记",content:"我的备注",point:"116.357355|40.096068",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}];
//创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                borderColor:"#808080",
                color:"#333",
                cursor:"pointer"
            });

            (function(){
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click",function(){
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open",function(){
                    _marker.getLabel().hide();
                });
                _iw.addEventListener("close",function(){
                    _marker.getLabel().show();
                });
                label.addEventListener("click",function(){
                    _marker.openInfoWindow(_iw);
                });
                if(!!json.isOpen){
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }
//创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
//创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }

    initMap();//创建和初始化地图


};


