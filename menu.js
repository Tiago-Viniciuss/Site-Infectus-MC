function clickMenu() {
    
    var menu = document.getElementById('menu')

    menu.classList.toggle('active')
}

function mudarTamanho() {
    if (window.innerWidth >= 1200) {
        menu.style.visibility = 'visible'
    }
}