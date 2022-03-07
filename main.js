const hamburgerMenu = document.querySelector('.header-right > a');
const closeHamburgerMenu = document.querySelector('.close')


//VERSIONE 1

hamburgerMenu.addEventListener('click', function () {
    document.querySelector('.hamburger-menu').style.display = "block";

})

closeHamburgerMenu.addEventListener('click', function () {
    document.querySelector('.hamburger-menu').style.display = "none";

})



//VERSIONE 2

/*
hamburgerMenu.addEventListener('click', function () {
    const hamburgerMenuDisplay = document.querySelector('.hamburger-menu');
    hamburgerMenuDisplay.classList.add('active')

})

closeHamburgerMenu.addEventListener('click', function () {
    const hamburgerMenuDisplay = document.querySelector('.hamburger-menu');
    hamburgerMenuDisplay.classList.remove('active')

})
*/