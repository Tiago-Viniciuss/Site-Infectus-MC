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



function mudarTemaEscuro() {

    let temaclaro = document.getElementById('temaBotaoClaro')
    let temaescuro = document.getElementById('temaBotaoEscuro')
    let body = document.getElementById('bodyArticle')
    let artigo = document.getElementById('articleOrigem')
    let h2 = document.getElementById('tituloArtigo')
    let p = document.querySelectorAll('p')
    let legenda = document.querySelectorAll('legend')
    let autor = document.getElementById('autor')
    let linkAutor = document.getElementById('linkAutor')
    let logoRodape = document.getElementById('logoClube')
    let pSessao = document.getElementById('pSessao')
    let pRodape = document.getElementById('pRodape')
    let pDev = document.getElementById('pDev')
    
    
     p.forEach((p) => {
        p.style.color = 'black'
    } )

    legenda.forEach((legend) => {
        legend.style.color = 'black'
    } )

    temaescuro.style.display = 'block'
    temaclaro.style.display = 'none'
    body.style.background = 'white'
    artigo.style.background = 'white'
    h2.style.color = 'black'
    autor.style.color = 'black'
    linkAutor.style.color = 'black'
    logoRodape.style.background = "white"
    pSessao.style.color = 'black'
    pRodape.style.color = 'black'
    pDev.style.color = 'black'

}

function mudarTemaClaro() {

    let temaclaro = document.getElementById('temaBotaoClaro')
    let temaescuro = document.getElementById('temaBotaoEscuro')
    let body = document.getElementById('bodyArticle')
    let artigo = document.getElementById('articleOrigem')
    let h2 = document.getElementById('tituloArtigo')
    let p = document.querySelectorAll('p')
    let legenda = document.querySelectorAll('legend')
    let autor = document.getElementById('autor')
    let linkAutor = document.getElementById('linkAutor')
    let pSessao = document.getElementById('pSessao')
    let pRodape = document.getElementById('pRodape')
    let pDev = document.getElementById('pDev')

    p.forEach((p) => {
        p.style.color = 'white'
    } )

    legenda.forEach((legend) => {
        legend.style.color = 'white'
    } )

    temaescuro.style.display = 'none'
    temaclaro.style.display = 'block'
    body.style.background = 'black'
    artigo.style.background = 'black'
    h2.style.color = 'white'
    autor.style.color = 'white'
    linkAutor.style.color = 'white'
    pSessao.style.color = 'black'
    pRodape.style.color = 'black'
    pDev.style.color = 'black'
}