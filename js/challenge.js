const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById("pause")

let countDown = setInterval(() => [
    counter.textContent++
],1000)

plus.addEventListener('click',() => countUp())
function countUp(){
   counter.textContent++
}
minus.addEventListener('click',() => countUnder())
function countUnder(){
    counter.textContent--
}