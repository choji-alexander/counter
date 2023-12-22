let saveEL = document.getElementById('save-el');
let countEL = document.getElementById('count-el');
let resetEL = document.getElementById('reset-btn');
let count = 0;

function increment(){
    count = count + 1
    countEL.innerText = count
}

function save(){
    let countNMore = count + " - "
    saveEL.textContent += countNMore
    console.log(count)
}

function reset(){
    count = 0
    countEL.innerText = 0
}