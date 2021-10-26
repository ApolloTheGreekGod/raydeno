function colormode() {
    var element = document.body;
    element.classList.toggle("lightmode");
    var colory = document.getElementById("ColorModes");
    if (colory.innerHTML === "Toggle Light Mode" ) {
        colory.innerHTML = "Toggle Dark Mode";
    } else {
        colory.innerHTML = "Toggle Light Mode";
    }
    }
