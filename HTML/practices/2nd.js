let count = 0;
let countElement = document.getElementById("count");

function incrementCount() {
    count++;
    countElement.innerText = count;
}
function decrementCount() {
    count--;
    countElement.innerText = count;
}
function resetCount() {
    count = 0;
    countElement.innerText = count;
}