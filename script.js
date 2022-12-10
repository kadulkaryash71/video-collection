$('.video').parent().click(function () {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});

const deck = $('.card-deck')[0]

fetch('./data/data.json').then(
    data => data.json()
).then(
    cards => cards.map(card => {
        return `
            <div class="card">
                <div class="card-tn">
                    <video class="video" poster="${card.thumbnail}" muted>
                        <source src="${card.video}" type="video/mp4" />
                    </video>
                    <div class="playpause"></div>
                </div>
                <div class="card-text">
                    <small class="card-head">
                        ${card.category}
                    </small>
                    <h2 class="card-desc">
                        ${card.title}
                    </h2>
                </div>
            </div>
        `
    })
).then(
    cardDeck => deck.innerHTML = cardDeck.join("")
)

// {
    //     "catergory": "Design",
    //     "title": "Security isn't just a technology problem it's about design, too",
    //     "thumbnail": "../assets/desktop.webp",
    //     "video": "../assets/sample.mp4"
    // },