//HOME COUNTER

let btn1 = document.getElementById("home-score-btn-1")
let btn2 = document.getElementById("home-score-btn-2")
let btn3 = document.getElementById("home-score-btn-3")
let elCountHome = document.getElementById("count-home")

let countHome = 0

function increaseHomeScoreOne() {
    countHome += 1
    elCountHome.textContent = countHome;
}

function increaseHomeScoreTwo() {
    countHome += 2
    elCountHome.textContent = countHome;
}

function increaseHomeScoreThree() {
    countHome += 3
    elCountHome.textContent = countHome;
}

//GUEST COUNTER

let btn1Guest = document.getElementById("guest-score-btn-1")
let btn2Guest = document.getElementById("guest-score-btn-2")
let btn3Guest = document.getElementById("guest-score-btn-3")

let elCountGuest = document.getElementById("count-guest")
let countGuest = 0


function increaseGuestScoreOne() {
    countGuest += 1
    elCountGuest.textContent = countGuest;
}

function increaseGuestScoreTwo() {
    countGuest += 2
    elCountGuest.textContent = countGuest;
}

function increaseGuestScoreThree() {
    countGuest += 3
    elCountGuest.textContent = countGuest;
}