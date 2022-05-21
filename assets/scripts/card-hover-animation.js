function handleMouseEnter() {
    //adiciona classe de animação
    this.classList.add('card--hovered');
}

function addEventListenersToCards() {
    const cardElement = document.getElementsByClassName('card');

    for(let i = 0; i < cardElement.length; i++) {
        /* cards individuais */
        const card = cardElement[i];
        /* chama função com o mouse em cima da imagem */
        card.addEventListener('mouseenter', handleMouseEnter);
    }
}

/* Chamando a função após carregar os elementos da página */
document.addEventListener('DOMContentLoaded', addEventListenersToCards);