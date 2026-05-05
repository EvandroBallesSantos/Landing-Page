const selectors = [
    '.slide-in',
    '.fade-in',
    '.div-img',
    '.conteudo-principal-1-nome',
    '.descTitles',
    '.conteudo-principal-1-descript',
    '.miniCardsSkills',
    '.containerButtons',
    '.titulo-quem-sou',
    '.descricao-quem-sou',
    '.description-tecnologias',
    '.cardsSkills',
    '.portifolioAll',
    '.card-only',
    '.lista-contato',
    '.limitar'
];

const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach( ( entry ) => {
        if ( entry.isIntersecting ) {
            entry.target.classList.add( 'show' );
    } else {
      entry.target.classList.remove('show');
        }
    } );
}, observerOptions);

document.querySelectorAll( selectors.join( ', ' ) ).forEach( ( el ) => {
    observer.observe( el );
});