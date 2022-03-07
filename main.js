const hamburgerMenu = document.querySelector('.header-right > a');
const closeHamburgerMenu = document.querySelector('.close')


hamburgerMenu.addEventListener('click', function () {
    console.log('click ok');
    const hamburgerMenuDisplay = document.querySelector('.hamburger-menu').style.display = "block";

})
closeHamburgerMenu.addEventListener('click', function () {
    console.log('click ok');
    const hamburgerMenuDisplay = document.querySelector('.hamburger-menu').style.display = "none";

})
