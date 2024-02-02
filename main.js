var cabecalho = document.getElementById("cabecalho");
var menuLista = document.getElementById("menu-lista");
var conteudo = document.getElementById("conteudo");
var showSidebar = false;

function tooggleSidebar() {
  showSidebar = !showSidebar;
    if(showSidebar) {
        menuLista.style.marginTop = '0vw';
        menuLista.style.animationName = 'showSiderbar';
        conteudo.style.filter = 'blur(5px)';
    } else {
        menuLista.style.marginTop = '';
        menuLista.style.animationName = 'showSiderbarInvert';
        conteudo.style.filter = 'blur(0px)';
    }
}

function closeSidebar() {
    if(showSidebar){
        tooggleSidebar();
    }else {
        (!showSidebar)
    }
}

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth > 768 && showSidebar) {
        tooggleSidebar();
    }else {
        (closeSidebar)
    }
});


/* Efeito deslizar página toda */

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const content01 = document.querySelectorAll('.conteudo-principal-1-escrito');
const content02 = document.querySelectorAll('.div-img');
const content03 = document.querySelectorAll('.container-quem-sou');
const content04 = document.querySelectorAll('.img-img');
const content05 = document.querySelectorAll('.portifolio');
const content06 = document.querySelectorAll('.container-cards');
const content07 = document.querySelectorAll('.contato');

content01.forEach((element) => myObserver.observe(element))
content02.forEach((element) => myObserver.observe(element))
content03.forEach((element) => myObserver.observe(element))
content04.forEach((element) => myObserver.observe(element))
content05.forEach((element) => myObserver.observe(element))
content06.forEach((element) => myObserver.observe(element))
content07.forEach((element) => myObserver.observe(element))