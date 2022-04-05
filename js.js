let menubtn = document.querySelector('.page-head__menu-icon');

let menumobile = document.querySelector('.page-head__menu');

let menubackground = document.querySelector('.page-head__menu-background-image');


menubtn.addEventListener('click', function(){

    if (menubackground.classList.contains('pressed')){
         menubackground.classList.remove('pressed')
         menumobile.classList.remove('pressedto')
        
        }
    else {
        console.log('cloc') 
        menubackground.classList.add('pressed');
        menumobile.classList.add('pressedto');
        }

})

