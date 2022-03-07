const hamburgerMenu = document.getElementByClassName('hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    console.log('click ok')
    hamburgerMenu.classList.toggle('hamburger-menu.active');


})