/**
 * Created by Administrator on 2018/9/4.
 */
var aRow =  document.getElementsByClassName('pp1');
var aLen = 0;
var tmpe =setInterval(function(){
    if(aLen > aRow.length-1){
        aLen =0;
    }
    for (var i = 0; i < aRow.length; i++) {
        aRow[i].classList.remove("active")
    }
    aRow[aLen].classList.add("active");
    console.log(1);
    aLen++;
},1200);
