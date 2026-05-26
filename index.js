const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    card.onclick = () => {
        const chosen = card.dataset.card;

        window.location.href = `chosen.html?card=${chosen}`;
    };
}