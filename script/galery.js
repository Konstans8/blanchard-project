document.addEventListener('DOMContentLoaded', function() {

    const card = document.querySelector('.galery__card-active');
    const slideButtonOne = document.getElementById('one');
    const slideButtonTwo = document.getElementById('two');
    const slideButtonThree = document.getElementById('three');
    const slideButtonFour = document.getElementById('four');
    const slideButtonFive = document.getElementById('five');
    const slideButtonSix = document.getElementById('six');
    const closeCard = document.querySelector('.galery__delete');

    slideButtonOne.addEventListener('click', function() {
        card.classList.add('overlay');
    });

    slideButtonTwo.addEventListener('click', function() {
        card.classList.add('overlay');
    });

    slideButtonThree.addEventListener('click', function() {
        card.classList.add('overlay');
    });

    slideButtonFour.addEventListener('click', function() {
        card.classList.add('overlay');
    });

    slideButtonFive.addEventListener('click', function() {
        card.classList.add('overlay');
    });

    slideButtonSix.addEventListener('click', function() {
        card.classList.add('overlay');
    });

    closeCard.addEventListener('click', function() {
        card.classList.remove('overlay');
    });

});