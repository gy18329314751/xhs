/**
 * Created by Administrator on 2018/9/10.
 */

var oScreenBanner = document.getElementsByClassName("fox")[0];
var oAllScreen = document.getElementsByClassName("fox-one")[0];
var arrScreen = document.getElementsByClassName("fox-one1");
var screenW, screenH;
var page = 0;
function resize() {
    // 获取屏幕宽高
    screenW = document.documentElement.clientWidth;
    /* html body的宽度*/
    screenH = document.documentElement.clientHeight;
    /* html body的高度*/
    // 设置宽高    总轮播图    大盒子    每一屏
    oAllScreen.style.width = oScreenBanner.style.width = screenW + "px";  //给 oAllScreen   oScreenBanner设置一屏的宽度
    oScreenBanner.style.height = screenH + "px";       //最大盒子一屏高
    oAllScreen.style.height = screenH * arrScreen.length + "px";
    for (var i = 0; i < arrScreen.length; i++) {
        arrScreen[i].style.width = screenW + "px";
        arrScreen[i].style.height = screenH + "px";
    }


    oAllScreen.style.top = -page * screenH + "px";
}
resize();
window.onresize = resize;    //窗口改变   重新执行

var isRunning = false; // 儅isRunning 為true  鼠標滾軸不管事
// 儅isRunning 為false  鼠標滾軸管事
function scrollUp() {
    if (!isRunning) {
        isRunning = true;
        // 設置定時器  儅1秒之後  滾軸繼續可以使用
        setTimeout(function () {
            isRunning = false;
        }, 1000);
        if (page > 0) {
            page--;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}

function scrollDown() {
    if (!isRunning) {
        isRunning = true;
        setTimeout(function () {
            isRunning = false;

        }, 1000);
        if (page < arrScreen.length - 1) {
            page++;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}


// chrome   ie
addEvent(window, "mousewheel", mouseWheel);
// ff
addEvent(window, "DOMMouseScroll", mouseWheel);


// 滚轴事件函数
function mouseWheel(ev) {
    var oEvent = window.event || ev;
    if (oEvent.detail) {
        if (oEvent.detail > 0) {
            scrollDown()
        } else {
            scrollUp()
        }
    } else if (oEvent.wheelDelta) {
        if (oEvent.wheelDelta > 0) {
            scrollUp()
        } else {
            scrollDown()
        }
    }
}


function addEvent(ele, type, listener) {
    if (ele.addEventListener) {
        ele.addEventListener(type, listener);
    } else {
        ele.attachEvent("on" + type, listener);
    }

};

var dian = document.querySelectorAll('.fo1 .fo1-o');
var xiao = document.querySelectorAll('.fox-one1 .fo2');
console.log(dian);
for (var i = 0; i < dian.length; i++) {
    dian[i].index = i;
    dian[i].onclick = function () {
        for (var j = 0; j < xiao.length; j++) {
            xiao[j].style.display = 'none';
            dian[j].classList.remove('kl')
        }
        xiao[this.index].style.display = 'block';
        dian[this.index].classList.add('kl')
    }
}




