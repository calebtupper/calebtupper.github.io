
/*JQuery*/
$(document).ready(function(){
    $("div.light-dark").click(function(){
            $("body").toggleClass("dark-mode"); 
        });
    
    $("nav ul li").click(function(){
        var target = $(this).attr("data-target");
        alert(target);
    }); 
    $("a.nav-logo img").on("darkMode",function(){
       $("a.nav-logo img").attr("src","/assets/img/TM-Logo-Web-White.png"); 
        
    });
}); 