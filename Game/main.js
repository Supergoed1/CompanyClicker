var money = 0;
var moneyPerClick = 1;
var upgradeClicksCost = 50;
var upgradeWorkerCapCost = 500;
var workers = 0;
var workerCap = 10;
var hours = 6;
var days = 1;
var perSecordInterval = setInterval("perSecond()", 1000);
var updateGUIInterval = setInterval("updateGUI()", 10);
var saveInterval = setInterval("saveData()", 30 * 1000);

loadData();

function saveData() {
    localStorage.setItem("moneydata", money);
    localStorage.setItem("moneyPerClickdata", moneyPerClick);
    localStorage.setItem("upgradeClicksCostdata", upgradeClicksCost);
    localStorage.setItem("upgradeWorkerCapCostdata", upgradeWorkerCapCost);
    localStorage.setItem("workersdata", workers);
    localStorage.setItem("workerCapdata", workerCap);
    localStorage.setItem("hoursdata", hours);
    localStorage.setItem("daysdata", days);
}

function loadData() {
    if(Number(localStorage.getItem("moneydata")) == 0) saveData();
    money = Number(localStorage.getItem("moneydata"));
    moneyPerClick = Number(localStorage.getItem("moneyPerClickdata"));
    upgradeClicksCost = Number(localStorage.getItem("upgradeClicksCostdata"));
    upgradeWorkerCapCost = Number(localStorage.getItem("upgradeWorkerCapCostdata"));
    workers = Number(localStorage.getItem("workersdata"));
    workerCap = Number(localStorage.getItem("workerCapdata"));
    hours = Number(localStorage.getItem("hoursdata"));
    days = Number(localStorage.getItem("daysdata"));
}

function resetData() {
    if(confirm("Are you sure you want to reset?") == false) return;
    localStorage.clear();
    money = 0;
    moneyPerClick = 1;
    upgradeClicksCost = 50;
    upgradeWorkerCapCost = 500;
    workers = 0;
    workerCap = 10;
    hours = 6;
    days = 1;
}

function buttonclick() {
    money += moneyPerClick;
    hours += 1;
}
function increaseClicks() {
    if(money >= upgradeClicksCost) {
        moneyPerClick += 1;
        money -= upgradeClicksCost;
        upgradeClicksCost *= 1.25;
        upgradeClicksCost = Math.round(upgradeClicksCost);
    }
}

function upgradeWorkerCap() {
    if(money >= upgradeWorkerCapCost) {
        money -= upgradeWorkerCapCost;
        workerCap += 10;
        upgradeWorkerCapCost *= 1.30;
        upgradeWorkerCapCost = Math.round(upgradeWorkerCapCost);
    }
}

function buyWorker() {
    if(money >= 200) {
        if(workers >= workerCap) return;
        document.getElementById("workerAmount").style.visibility = "visible"
        document.getElementById("workerCapButton").style.visibility = "visible"
        document.getElementById("upgradeWorkerCapCost").style.visibility = "visible"
        workers += 1;
        money -= 200;
    }
}

function perSecond() {
    money += workers;
}

function updateGUI() {
    if(money >= 200) {
        document.getElementById("buyWorkerButton").style.visibility = "visible"
    }
    if(money >= upgradeClicksCost) {
        document.getElementById("increaseClicksButton").style.visibility = "visible"
        document.getElementById("upgradeCost").style.visibility = "visible"
    }
    if(hours >= 25) {
        hours = 0;
        days += 1;
    }

    document.getElementById("clicks").textContent = "Money: " + money;
    document.getElementById("upgradeCost").textContent = "Cost: " + upgradeClicksCost;
    document.getElementById("clickButton").textContent = "Work +" + moneyPerClick + " Money";
    document.getElementById("workerAmount").textContent = "Workers: " + workers + "/" + workerCap;
    document.getElementById("upgradeWorkerCapCost").textContent = "Cost: " + upgradeWorkerCapCost;
    document.getElementById("time").textContent = hours + ":00";
    document.getElementById("day").textContent = "day " + days;
}
