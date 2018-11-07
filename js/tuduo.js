window.onload=function(){


var olist = document.getElementById("list");
ajax('js/tsconfig.json', function (a) {
    var _a = eval("(" + a + ")");
    for (var i = 0; i < _a.length; i++) {
        let {image,title,spa,hot}=_a[i];
        olist.innerHTML += ` <li><a href="javascript:;">
    <img src="${image}" alt="">
    <p>${title}</p>
    <span>${spa}</span>
    <em>${hot}</em>
    </a></li>`
    }
});


var olit = document.getElementById("lit");
ajax('js/tsconfig.json', function (a) {
    var _a = eval("(" + a + ")");
    for (var i = 0; i < _a.length; i++) {
        let {image,title,spa,hot}=_a[i];
        olit.innerHTML += ` <li><a href="javascript:;">
    <img src="${image}" alt="">
    <p>${title}</p>
    <span>${spa}</span>
    <em>${hot}</em>
    </a></li>`
    }
});




var dian =document.getElementById('pp');
    var cui = document.getElementsByClassName('cui1')[0];
    console.log(cui);
    var chu = document.getElementsByClassName('innee')[0];
dian.onclick= function(){
    chu.style.display='block';
    cui.style.display='none'
};
};