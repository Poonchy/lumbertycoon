if (localStorage.getItem("clicks") === null){
    localStorage.setItem("clicks", 0)
}
if (localStorage.getItem("lumberYardsOwned") === null){
    localStorage.setItem("lumberYardsOwned", 0)
}
if (localStorage.getItem("lumberYardsCost") === null){
    localStorage.setItem("lumberYardsCost", 10)
}
if (localStorage.getItem("salvageYardsOwned") === null){
    localStorage.setItem("salvageYardsOwned", 0)
}
if (localStorage.getItem("salvageYardsCost") === null){
    localStorage.setItem("salvageYardsCost", 17)
}
if (localStorage.getItem("lastUpdated") === null){
    localStorage.setItem("lastUpdated", 0)
}

document.getElementById("counter").innerHTML = localStorage.getItem("clicks")
document.getElementById("lumberyards").innerHTML =  localStorage.getItem("lumberYardsOwned")
document.getElementById("salvageyard").innerHTML =  localStorage.getItem("salvageYardsOwned")
document.getElementById("lumcost").innerHTML = localStorage.getItem("lumberYardsCost")
document.getElementById("salcost").innerHTML = localStorage.getItem("salvageYardsCost")

function updateClicks(increment){
    newClicks = +localStorage.getItem("clicks") + +increment
    localStorage.setItem("clicks", newClicks)
    document.getElementById("counter").innerHTML = newClicks
}

function clicker(){
    updateClicks(1)
}

function lumberyards(){
    window.setInterval(function() {
        updateClicks(localStorage.getItem("lumberYardsOwned"))
    }, 1000);
}

function salvageyards(){
    window.setInterval(function() {
        updateClicks(localStorage.getItem("salvageYardsOwned"))
    }, 500);
}

function addLumberyard(){
    if (+localStorage.getItem("clicks") >= +localStorage.getItem("lumberYardsCost") ){
        updateClicks(-+localStorage.getItem("lumberYardsCost"))
        localStorage.setItem("lumberYardsOwned", +localStorage.getItem("lumberYardsOwned") + 1)
        localStorage.setItem("lumberYardsCost", Math.round(+localStorage.getItem("lumberYardsCost") * 1.2))
        document.getElementById("lumberyards").innerHTML =  localStorage.getItem("lumberYardsOwned")
        document.getElementById("lumcost").innerHTML = localStorage.getItem("lumberYardsCost")
    }
}
function addSalvageyard(){
    if (+localStorage.getItem("clicks") >= +localStorage.getItem("salvageYardsCost") ){
        updateClicks(-+localStorage.getItem("salvageYardsCost"))
        localStorage.setItem("salvageYardsOwned", +localStorage.getItem("salvageYardsOwned") + 1)
        localStorage.setItem("salvageYardsCost", Math.round(+localStorage.getItem("salvageYardsCost") * 1.3))
        document.getElementById("salvageyard").innerHTML =  localStorage.getItem("salvageYardsOwned")
        document.getElementById("salcost").innerHTML = localStorage.getItem("salvageYardsCost")
    }
}

lumberyards()
salvageyards()