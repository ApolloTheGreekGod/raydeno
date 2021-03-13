$(document).ready(function(){
    $("navbutton1").click(function(){

        if($("button").toggleClass("navbutton1").text() == "☰"){
        $("button").toggleClass("navbutton1").text("🞬");
    }
    else{
        $("button").toggleClass("navbutton1").text("☰");
    }

    $("li").toggle("slow");
    });
    
});

