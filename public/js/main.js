/* menu hamburguesa */

 const hamburguerMenu = ({target}) => {

   const activeHamburguerMenu = target.classList.toggle('menu');


   const classNav = document.getElementsByClassName('contenedor-nav-botones-header');

   const header = document.querySelector('header');


    if(activeHamburguerMenu) {
        classNav[0].classList.add('contenedor-nav-botones-header__oculta');
        header.classList.add('header__menu-abierto');
    } else {      
        classNav[0].classList.remove('contenedor-nav-botones-header__oculta');
        header.classList.remove('header__menu-abierto');
    }           
    
}

 const containerNavResize = () => {
    const classNav = document.getElementsByClassName('contenedor-nav-botones-header');
    
    if(window.innerWidth >= 768) {

        classNav[0].classList.remove('contenedor-nav-botones-header__oculta');

    } 

}


window.addEventListener('resize', containerNavResize);

window.addEventListener('load', containerNavResize);

