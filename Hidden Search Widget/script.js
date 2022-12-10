const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
// const search = document.getElementsByClassName('search');

btn.addEventListener('click' , () => {
    search.classList.toggle('active')
    input.focus()
})
