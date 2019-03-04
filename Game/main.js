var visibility = true;
var hello = setInterval(function() {
    if(visibility == true) {
        document.getElementById("helloText").style = "visibility: hidden;"
        visibility = false;
    }
    if(visibility == false) {
        document.getElementById("helloText").style = "visibility: visible;"
        visibility = true;
    }
},1000);