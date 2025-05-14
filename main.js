
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

// Section 1
const content01 = document.querySelectorAll('.conteudo-principal-1-escrito');
const content011 = document.querySelectorAll('.conteudo-principal-1-ola');
const content012 = document.querySelectorAll('.conteudo-principal-1-nome');
const content013 = document.querySelectorAll('.conteudo-principal-1-decript');
const content014 = document.querySelectorAll('.lista-contato');
const content015 = document.querySelectorAll('.div-img');

// section 2
const content02 = document.querySelectorAll('.titulo-quem-sou');
const content022 = document.querySelectorAll('.descricao-quem-sou');
const content023 = document.querySelectorAll('.description-tecnologias');
const content024 = document.querySelectorAll('.description-cursos');


const content03 = document.querySelectorAll('.container-quem-sou');
const content05 = document.querySelectorAll('.portifolio');
const content06 = document.querySelectorAll('.container-cards');
const content07 = document.querySelectorAll('.contato');

const content08 = document.querySelectorAll('footer');

// Section 1
content01.forEach((element) => myObserver.observe(element))
content011.forEach((element) => myObserver.observe(element))
content012.forEach((element) => myObserver.observe(element))
content013.forEach((element) => myObserver.observe(element))
content014.forEach((element) => myObserver.observe(element))
content015.forEach((element) => myObserver.observe(element))

// Section 2
content02.forEach((element) => myObserver.observe(element))
content022.forEach((element) => myObserver.observe(element))
content023.forEach((element) => myObserver.observe(element))
content024.forEach((element) => myObserver.observe(element))




content03.forEach((element) => myObserver.observe(element))
content05.forEach((element) => myObserver.observe(element))
content06.forEach((element) => myObserver.observe(element))
content07.forEach((element) => myObserver.observe(element))
content08.forEach((element) => myObserver.observe(element))