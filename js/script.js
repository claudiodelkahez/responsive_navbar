const toggleMenu = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')



toggleMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})