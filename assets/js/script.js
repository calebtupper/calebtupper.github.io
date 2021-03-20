/*JQuery*/
$(document).ready(function(){
    $("div.light-dark").click(function(){
            $("body").toggleClass("dark-mode");
            setCookie("color","dark",1);
        });
}); 

function setCookie(cname, cvalue, exhours){
    var date = new Date();
    date.setTime(date.getTime()+exhours*60*60*1000);
    var expires = "; expires =" + date.toGMTString();
    document.cookie = cname+"="+cvalue+expires+";path=/"
}

