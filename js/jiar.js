
window.onload =function(){
    var hezi1 = document.getElementsByClassName('mox21')[0];
    var hezi2 = document.getElementsByClassName('mox22')[0];
    var hezi3 = document.getElementsByClassName('mox21')[1];
    var hezi4 = document.getElementsByClassName('mox22')[1];
    console.log(hezi1);
    console.log(hezi2);

    window.onscroll=function(){

        var scrollTop=window.pageYOffset||document.
                documentElement.scrollTop||document.body.scrollTop||0;
        document.title =scrollTop;


    if(scrollTop>1100){
        hezi1.classList.add('kkk');
        hezi2.classList.add('iii');
        hezi3.classList.add('kkk');
        hezi4.classList.add('iii');

    }else{
        hezi1.classList.remove('kkk');
        hezi2.classList.remove('iii');
        hezi3.classList.remove('kkk');
        hezi4.classList.remove('iii');
    }

    }

};