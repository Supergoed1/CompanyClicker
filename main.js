var game = {
    website: {
        name: "DAB",
        ad1: false,
        ad2: false,
        ad3: false,
        ad4: false,
        ad5: false
    },
    money: 0,

};
var updategui = setInterval("updateGUI()", 100);


function init() {
    if(load() == false) {
        game.website.name = prompt("Name your website")
        save();
    }
}

function save() {
    localStorage.setItem("game", JSON.stringify(game));
}

function updateGUI() {
    document.getElementById("websiteTitle").innerHTML = game.website.name;
}

function load() {
    if(localStorage.length <= 0) return false;
    if(localStorage.getItem("game") == null) return false;
    game = JSON.parse(localStorage.getItem("game"));
}
init();