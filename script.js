let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Passer à la slide suivante
    currentSlide = (currentSlide + 1) % totalSlides; // Boucle (1 → 2 → 3 → 1 → 2 → 3, etc.)

    // Déplacer les slides
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}