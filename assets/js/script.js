const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('color-mode='))
  .split('=')[1];

/*JQuery Light-Dark Mode Selector and Cookie*/
$(document).ready(function(){
    if(cookieValue = "dark"){
                $("body").toggleClass("dark-mode");
            }
            else{}
    alert(cookieValue);
    $("div.light-dark").click(function(){
            $("body").toggleClass("dark-mode");
        
            if($("body").hasClass("dark-mode")){
                setCookie("color","dark",30);
            }
            else{   
                setCookie("color","light",30);
            }
        });
}); 

/*Set JS Cookie*/
function setCookie(cname, cvalue, exdays){
    var date = new Date();
    date.setTime(date.getTime()+exdays*24*60*60*1000);
    var expires = "; expires =" + date.toGMTString();
    document.cookie = cname+"="+cvalue+expires+";path=/"
}

