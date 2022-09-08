document.addEventListener('DOMContentLoaded', function() {

    const loginContainer = document.querySelector('.header__login-open');
    const openMenu = document.querySelector('.header__btn-login');
    const closeMenu = document.querySelector('.header__login-close');

    openMenu.addEventListener('click', function() {
        loginContainer.classList.add('login');
    });

    closeMenu.addEventListener('click', function() {
        loginContainer.classList.remove('login');
    });


});