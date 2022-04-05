let menubtn = document.querySelector('.page-head__menu-icon');

let menumobile = document.querySelector('.page-head__menu');

let menubackground = document.querySelector('.page-head__menu-background-image');


menubtn.addEventListener('click', function(){

    console.log('cloc') ;
    menubackground.classList.add('pressed');
    menumobile.classList.add('pressedto');
})

