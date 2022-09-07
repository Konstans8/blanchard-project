document.addEventListener('DOMContentLoaded', function() {

    const blockMenu = document.querySelector('.header__menu-list');
    const addMenu = document.querySelector('.header__burger-menu');
    const removeMenu = document.querySelector('.header__burger-close');

    addMenu.addEventListener('click', function() {
        blockMenu.classList.add('menu');
    });

    removeMenu.addEventListener('click', function() {
        blockMenu.classList.remove('menu');
    });


});