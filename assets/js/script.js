
/*JQuery*/
$(document).ready(function(){
    $("div.light-dark").click(function(){
            $("body").toggleClass("dark-mode"); 
            if ($("body").hasClass("dark-mode")) {
                $("a.nav-logo img").attr("src","assets/img/tm-logo-web-white.png");
            }
            else{
                $("a.nav-logo img").attr("src","assets/img/tm-logo-web-black.png");
            }
        });
    
    $("nav ul li").click(function(){
        var target = $(this).attr("data-target");
        alert(target);
    }); 
    $("a.nav-logo img").on("darkMode",function(){
       $("a.nav-logo img").attr("src","/assets/img/TM-Logo-Web-White.png"); 
        
    });
}); 