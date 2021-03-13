$(document).ready(function(){
    $(".navbutton1").click(function(){

        if($(".navbutton1").text() == "☰"){
        $(".navbutton1").text("🞬");
    }
    else{
        $(".navbutton1").text("☰");
    }

    $("li").toggle("slow");
    });
    
});

