
/*JQuery Light-Dark Mode Selector and Cookie*/
$(document).ready(function(){
    var color = getCookie("color");
    if(color == "dark"){
        $("body").toggleClass("dark-mode");
    }
    else{} 
    
    $("div.light-dark").click(function(){
            $("body").toggleClass("dark-mode");
            if($("body").hasClass("dark-mode")){
                setCookie("color","dark",30);
            }
            else{   
                setCookie("color","light",30);
            }
            dataLayer.push({
              'color': color,
              'event': 'dark_mode_toggle'
            });
        });
}); 

/*Set Cookie JS*/
function setCookie(cname, cvalue, exdays){
    var date = new Date();
    date.setTime(date.getTime()+exdays*24*60*60*1000);
    var expires = "; expires =" + date.toGMTString();
    document.cookie = cname+"="+cvalue+expires+";path=/"
}

/*Get Cookie JS*/
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
