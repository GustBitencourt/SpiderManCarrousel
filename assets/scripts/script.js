function handleMouseEnter() {
    //adiciona classe de animação
    this.classList.add('card--hovered');

    /* Trocar background do card */
    document.body.id = `${this.id}-hovered`;
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

/* função responsavel pelo caroulsel */
function selectCarouselElement(selectedButtonElement) {
    //pegando o id do button
    const selectedElementItem = selectedButtonElement.id;

    //carrosel
    const carousel = document.querySelector('.cards-carousel');

    const transform = carousel.style.transform; //pegando o valor de transform do carousel
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); //pegando o valor da string passada no estilo do caroulsel com a funcao match e regex, retorna um array com o valor do transform

    /* lógica para girar o carousel, zerando o id do elemento para ficar na posição central, e usando o id para multiplicar sua posição */
    const rotateYDeg = -120 * (Number(selectedElementItem) -1)

    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`); //substitui o valor do array de rotateY pelo novo valor

    carousel.style.transform = newTransform; //atribuindo o novo valor ao transform do carousel

    /* trocando botão de card ativo */
    const activeButtonElement = document.querySelector('.controller__button--active');
    activeButtonElement.classList.remove('controller__button--active');
    selectedButtonElement.classList.add('controller__button--active');
}