//funcionalidad al menu hambuergues 

const toggleMenu = document.getElementById('toggle__menu')
const mainMenu = document.getElementById('main__menu')

toggleMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('main__menu--show')
})