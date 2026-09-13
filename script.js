const cards = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card"
);

function mostrarCards() {

    cards.forEach(card => {

        const posicion = card.getBoundingClientRect();

        if (posicion.top < window.innerHeight - 80) {
            card.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", mostrarCards);

mostrarCards();
