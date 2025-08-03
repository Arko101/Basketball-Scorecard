
let pointsHome = 0
let pointsGuest = 0
function increaseHomeByOne(){
    pointsHome += 1
    document.getElementById("home-score").textContent = pointsHome
}
function increaseHomeByTwo(){
     pointsHome += 2
    document.getElementById("home-score").textContent = pointsHome
}
function increaseHomeByThree(){
     pointsHome += 3
    document.getElementById("home-score").textContent = pointsHome
}

function increaseGuestByOne(){
    pointsGuest += 1
    document.getElementById("guest-score").textContent = pointsGuest
}
function increaseGuestByTwo(){
     pointsGuest += 2
    document.getElementById("guest-score").textContent = pointsGuest
}
function increaseGuestByThree(){
     pointsGuest += 3
    document.getElementById("guest-score").textContent = pointsGuest
}