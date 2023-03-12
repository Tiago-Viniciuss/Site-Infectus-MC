function clickMenu() {
    
    var menu = document.getElementById('menu')
    var icone = document.getElementById('navigation')

    menu.classList.toggle('active')
    
    if(menu.className == ('active')) {
        icone.style.backgroundImage = "url(imagens/navigationfundo2.png)"
    } else {
        icone.style.backgroundImage = "url(imagens/navigationfundo.png)"
    }
    

}

function mudarTamanho() {
    if (window.innerWidth >= 1200) {
        menu.style.visibility = 'visible'
    }
}

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';


function animeScroll() {

const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
target.forEach(function(element){
if ((windowTop) > element.offsetTop) {
    element.classList.add(animationClass);
} else {
    element.classList.remove(animationClass);
}

})

}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){

    animeScroll();

})
    
}