// start with cont so can already select id from html always
const loadText = document.getElementsByClassName('loading-test');

const bg = document.getElementsByClassName('bg');
// console.log(loadText)

// Initialzie variable if needed
let load = 0

//setting timer at 30 mili secs
let int = setInterval(blurring, 30); 

// time to create function 

function blurring() {
    load++
    
   if(load > 99) 
   {
    clearInterval(int)
   }

   loadText.innerText = `${load}%`
  
   loadText.style.opacity = scale(load, 0, 100, 1, 0)

   bg.style.filter = `blur($ {scale(load, 0, 100, 30, 0)}p)`
}


// Picked the below function from stackoverflow
const scale = (num, in_min, in_max, out_min, out_max) => 
    {
    return( (num - in_min) * (out_max - out_min)) /
    (in_max - in_min) + out_min
    }