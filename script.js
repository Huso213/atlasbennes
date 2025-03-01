let currentSlide = 0;

function updateSlideIndicator() {
    const totalSlides = document.querySelectorAll('.slide').length;
    const slideIndicator = document.querySelector('.slide-indicator');
    slideIndicator.textContent = `${currentSlide + 1}/${totalSlides}`;
}

function nextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Passer à la slide suivante
    currentSlide = (currentSlide + 1) % totalSlides;

    // Déplacer les slides
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Mettre à jour l'indicateur de slide
    updateSlideIndicator();
}

function prevSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Passer à la slide précédente
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    // Déplacer les slides
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Mettre à jour l'indicateur de slide
    updateSlideIndicator();
}

// Initialiser l'indicateur de slide au chargement de la page
document.addEventListener('DOMContentLoaded', updateSlideIndicator);