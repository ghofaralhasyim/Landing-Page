
//*======== MENU SHOW Y HIDDEN ======= */
const navMenu = document.getElementById('nav-menu'),
    toggler = document.getElementById('nav-toggler'),
    closeMenu = document.getElementById('nav-close')

// SHOW NAVBAR MOBILE
toggler.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    toggler.classList.add('d-none')
})
// HIDDEN NAVBAR MOBILE
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
    toggler.classList.remove('d-none')
})