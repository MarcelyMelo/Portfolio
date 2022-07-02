const links = document.querySelector('.nav-links');
const btn = document.querySelector('.btn-toggle');
const logo = document.querySelector('.logo')

btn.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
    logo.classList.toggle('unable')

})