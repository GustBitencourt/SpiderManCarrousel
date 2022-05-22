function handleMouseEnter() {
    //adiciona classe de animação
    this.classList.add('card--hovered');

    /* Trocar background do card */
    document.body.id = `${this.id}--hovered`;
}

/* Remove classe responsavel pela animacao quando o mouse sai da imagem */
function handleMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = ``
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');

    for(let i = 0; i < cardElements.length; i++) {
        /* cards individuais */
        const card = cardElements[i];
        /* chama função com o mouse em cima da imagem */
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

/* Chamando a função após carregar os elementos da página */
document.addEventListener('DOMContentLoaded', addEventListenersToCards);