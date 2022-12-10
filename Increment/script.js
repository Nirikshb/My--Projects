// cause with this i can change inner element

let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save")

//consolo to check
// console.log(countEL)

//establashing my count as 0
let count = 0

//adding function to onclick argument in html
function increment () {
    count += 1;

     countEL.textContent = count; 
}

//log out the count when cliked on save
function save () {
    let saving = count + "-";
    saveEl.textContent += saving
    countEL.textContent = 0;
    count = 0;
    //textContent cause it gets content of all elements while innertext only get human readable content
    // console.log(count);
}


