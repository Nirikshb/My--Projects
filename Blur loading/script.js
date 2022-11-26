const loadText = document.getElementById('loading-Text')
const bg = document.getElementsByClassName('bg')

let load = 0

let int = setInterval(blurring,30)

function blurring() {
    load++

    if(load > 99){
        clearInterval(int)
    }

loadText.innerText = `${load}%`;

loadText.style.opacity = scale(load, 0, 100, 1, 0);

bg.style.filter =`bur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => 
    {
    return( (num - in_min) * (out_max - out_min)) /
    (in_max - in_min) + out_min
    }




    const inventors = [
        { first: 'Albert', last: 'Einstein'},
        { first: 'Isaac', last: 'Newton' },
        { first: 'Galileo', last: 'Galilei' },
        { first: 'Sarah E.', last: 'Goode' },
        { first: 'Lise', last: 'Meitner' },
        { first: 'Hanna', last: 'Hammarström' }
    ];
    