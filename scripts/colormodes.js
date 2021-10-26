function colormode() {
    var element = document.body;
    element.classList.toggle("lightmode");
    var colory = document.getElementById("ColorModes");
    if (colory.innerHTML === "Click for Light Mode" ) {
        colory.innerHTML = "Click for Dark Mode";
    } else {
        colory.innerHTML = "Click for Light Mode";
    }
    }
