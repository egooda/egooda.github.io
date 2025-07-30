// Seleciona o container das imagens
const slides = document.querySelector('.slides');
let index = 0;
const totalSlides = slides.children.length;

// Função para mover para a próxima imagem
function showNextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    let transf = -(index * 100)
    slides.style.transform = `translateX(${transf}%)`;
}

// Muda a imagem automaticamente a cada 1 segundo
let interval = setInterval(showNextSlide, 700);

// Pausa a animação no hover
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(interval); // Pausa a troca de imagens
});
slideshowContainer.addEventListener('mouseleave', () => {
    interval = setInterval(showNextSlide, 700); // Retorna a troca de imagens
});