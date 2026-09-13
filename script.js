```javascript
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
```

Agrega al final de `style.css`:

```css
.skill-card,
.project-card,
.experience-card {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.skill-card.visible,
.project-card.visible,
.experience-card.visible {
    opacity: 1;
    transform: translateY(0);
}
```
