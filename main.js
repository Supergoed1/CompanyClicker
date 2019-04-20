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
    moneyPerClick: 0.01
};
var ad1c = document.getElementById("ad1content");
var begButton = document.getElementById("beg");

function beg() {
    game.money += game.moneyPerClick;
    updateGUI();
}


function checkads() {
    if(game.website.ad1 == true) {
        ad1c.style.display = "block";
    } else if(game.website.ad1 == false) {
        ad1c.style.display = "none";
    }
}

function init() {
    if(load() == false) {
        game.website.name = prompt("Name your website")
        save();
    }
    updateGUI();
}

function save() {
    localStorage.setItem("game", JSON.stringify(game));
}

function updateGUI() {
    document.getElementById("websiteTitle").innerHTML = game.website.name;
    document.getElementById("money").innerHTML = currencyFormat(game.money);
    begButton.innerHTML = "+" + game.moneyPerClick;
    checkads();
}

function load() {
    if(localStorage.length <= 0) return false;
    if(localStorage.getItem("game") == null) return false;
    game = JSON.parse(localStorage.getItem("game"));
}

function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

window.onbeforeunload = function (){
    save();
};
init();