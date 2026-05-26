const loading = document.getElementsByClassName("loading");

// μετά από 5 δευτερόλεπτα
setTimeout(() => {

    // fade out ΟΛΑ τα loading elements
    for (let i = 0; i < loading.length; i++) {
        loading[i].style.opacity = "0";
    }

    setTimeout(() => {

        // κρύψε τα loading
        for (let i = 0; i < loading.length; i++) {
            loading[i].style.display = "none";
        }
        image.style.opacity = "1";
        text.style.opacity = "1";
        document.body.style.backgroundImage = "url('./assets/bgTarrotLess.jpeg')";

    }, 1500);

}, 5000);

const params =
    new URLSearchParams(window.location.search);

const chosen = params.get("card");


const image =
    document.getElementById("image");

const text =
    document.getElementById("text");



if (chosen === "moth") {

    image.src = "./assets/star.jpeg";

    text.textContent =
        "The Star has marked your path gently. A celebration awaits beneath soft light and open skies. On May 31st, 14:30, at Katarina’s house, join a moment that feels like hope quietly returning to the world. You are invited to Alexandra’s birthday gathering. Follow the light; it leads you exactly where you are meant to be.\n\nTo accept this invitation, send your reply back to where it came from.";

}


if (chosen === "mirror") {

    image.src = "./assets/moon.jpeg";

    text.textContent =
        "The Moon does not reveal everything at once. But it does reveal this: a gathering is waiting for you. On May 31st, 14:30, at Katarina’s house, step into a celebration wrapped in shadows, candlelight, and quiet wonder. You are invited to Alexandra’s birthday gathering. Trust what you feel more than what you see.\n\nTo accept this invitation, send your reply back to where it came from."
}

if (chosen === "spider") {

    image.src = "./assets/priestess.jpeg";

    text.textContent =
        "The High Priestess has already known you would see this. Beyond silence and candlelight, a private gathering is taking shape. On May 31st, 14:30, at Katarina’s house, you are invited into a space of mystery, warmth, and quiet celebration. This is your invitation to Alexandra’s birthday gathering. Some things are not spoken, only experienced.\nTo accept this invitation, send your reply back to where it came from.";

}

if (chosen === "door") {

    image.src = "./assets/magician.jpeg";

    text.textContent =
        "The Magician has opened the gate. An evening of candles, laughter, and unfolding chaos awaits. On May 31st, 14:30, at Katarina’s house, step into a gathering where everything feels slightly impossible, yet perfectly meant to be. You are invited to celebrate Alexandra’s birthday. Bring your energy; the rest will be conjured.\n\nTo accept this invitation, send your reply back to where it came from.";

}




