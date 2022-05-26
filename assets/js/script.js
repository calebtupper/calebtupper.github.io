$(document).ready(function(){
    $(".banner").css("height",$(window).height()-$(".header").height());
    if($(window).scrollTop() < 200 ){
        $(".banner h2").delay( 1000 ).fadeIn().delay( 2000 ).fadeOut();
        $(".banner a").delay( 2000 ).fadeIn();   
    }
    $("a[href='/#profile']").click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });

    
    /*JQuery Light-Dark Mode Selector and Cookie*/
    var color = getCookie("color");
    if(color == "dark"){
        $("body").toggleClass("dark-mode");
    }
    else{} 
    $("div.light-dark").click(function(){
            $("body").toggleClass("dark-mode");
            if($("body").hasClass("dark-mode")){
                setCookie("color","dark",30);
                dataLayer.push({
                  'color': 'dark',
                  'event': 'dark_mode_toggle'
                });
            }
            else{   
                setCookie("color","light",30);
                dataLayer.push({
                  'color': 'light',
                  'event': 'dark_mode_toggle'
            });
            }
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

/*Fix styling on resize or scroll*/
$(window).resize(function(){
    $(".banner").css("height",$(window).height()-$(".header").height());
});
$(window).scroll(function(){
    if($(window).scrollTop() > 199 ){
        $(".banner a").fadeOut();
    }
    else{
        $(".banner a").fadeIn();
    }
    if($(window).scrollTop() > 299 ){
        $(".profile .headshot").slideDown(300);
    }
    else{
        $(".profile .headshot").slideUp(300);
    }

    if($(window).width() < 770){
        
    }
});