const links = document.querySelector('.nav-links');
const btn = document.querySelector('.btn-toggle');
const logo = document.querySelector('.logo')
const navlink = document.querySelectorAll('.nav-links li a')

btn.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
    logo.classList.toggle('unable')
})

for(const link of navlink){
    link.addEventListener('click', ()=>{
        links.classList.remove('show-links')
        logo.classList.remove('unable')
    })
}