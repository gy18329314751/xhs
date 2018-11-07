
var inp2 = document.getElementsByClassName('bon')[0];
var but1 = document.getElementsByClassName('but')[0];
console.log(but1);
inp2.onclick=  function(){
    var inp1 = document.getElementsByClassName('inpt')[0].value;
    var reg=/^1[34578]\d{9}$/;
    var num=5;
    if(!(reg.test(inp1))){
        alert("手机号码有误，请重填");
        return false;
    }else {
        setInterval(function(){
            if(num==0){
                inp2.innerHTML="获取验证码";
                but1.style.background = 'rgba(255,0,0,0.8)'

                return
            }
            num--;
            inp2.innerHTML=num+"秒发送";
        },1000);
    }

};
