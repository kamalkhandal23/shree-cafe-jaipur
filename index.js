// let header  = document.querySelector('header');
// window.addEventListener('scroll',() => {
//     header.classList.toggle('shadow', window.scrollY > 0);
// });

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

$(document).ready(function(){
    setTimeout(function(){
        $('.popupmain').css('display','block');  },1000);
});

$('.close').click(function(){
    $('.popupmain').css('display','none'); 
});

