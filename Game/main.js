var game = {
    money = 0,
    moneyPerClick = 1,
    upgradeClicksCost = 50,
    upgradeWorkerCapCost = 500,
    workers = 0,
    workerCap = 10
};

var perSecordInterval = setInterval("perSecond()", 1000);
var updateGUIInterval = setInterval("updateGUI()", 10);
var saveInterval = setInterval("saveData()", 30 * 1000);

loadData();

function saveData() {
    localStorage.setItem("gamedata", game);
}

function loadData() {
    if(Number(localStorage.getItem("gamedata")) == null) saveData();
    game = localStorage.getItem("gamedata");
    if(money >= 50) {
        document.getElementById("buyWorkerButton").style.visibility = "visible"
        document.getElementById("workerAmount").style.visibility = "visible"
        document.getElementById("workerCapButton").style.visibility = "visible"
        document.getElementById("upgradeWorkerCapCost").style.visibility = "visible"
    }
    if(money >= 50) {
        document.getElementById("increaseClicksButton").style.visibility = "visible"
        document.getElementById("upgradeCost").style.visibility = "visible"
    }

}

function resetData() {
    if(confirm("Are you sure you want to reset?") == false) return;
    localStorage.clear();
    game.money = 0;
    game.moneyPerClick = 1;
    game.upgradeClicksCost = 50;
    game.upgradeWorkerCapCost = 500;
    game.workers = 0;
    game.workerCap = 10;
}

function buttonclick() {
    game.money += game.moneyPerClick;
}
function increaseClicks() {
    if(game.money >= game.upgradeClicksCost) {
        game.moneyPerClick += 1;
        game.money -= game.upgradeClicksCost;
        game.upgradeClicksCost *= 1.25;
        game.upgradeClicksCost = Math.round(game.upgradeClicksCost);
    }
}

function upgradeWorkerCap() {
    if(game.money >= game.upgradeWorkerCapCost) {
        game.money -= upgradeWorkerCapCost;
        game.workerCap += 10;
        game.upgradeWorkerCapCost *= 1.30;
        game.upgradeWorkerCapCost = Math.round(upgradeWorkerCapCost);
    }
}

function buyWorker() {
    if(game.money >= 200) {
        if(game.workers >= game.workerCap) return;
        document.getElementById("workerAmount").style.visibility = "visible"
        document.getElementById("workerCapButton").style.visibility = "visible"
        document.getElementById("upgradeWorkerCapCost").style.visibility = "visible"
        game.workers += 1;
        game.money -= 200;
    }
}

function perSecond() {
    game.money += game.workers;
}

function updateGUI() {
    if(game.money >= 200) {
        document.getElementById("buyWorkerButton").style.visibility = "visible"
    }
    if(game.money >= game.upgradeClicksCost) {
        document.getElementById("increaseClicksButton").style.visibility = "visible"
        document.getElementById("upgradeCost").style.visibility = "visible"
    }

    document.getElementById("clicks").textContent = "Money: " + game.money;
    document.getElementById("upgradeCost").textContent = "Cost: " + game.upgradeClicksCost;
    document.getElementById("clickButton").textContent = "Work +" + game.moneyPerClick + " Money";
    document.getElementById("workerAmount").textContent = "Workers: " + game.workers + "/" + game.workerCap;
    document.getElementById("upgradeWorkerCapCost").textContent = "Cost: " + game.upgradeWorkerCapCost;
}

window.onbeforeunload = function() {
    saveData();
};
