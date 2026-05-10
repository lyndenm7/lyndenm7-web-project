document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("genre-form");
    const result = document.getElementById("genre-result");

    if (form && result) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("player-name").value.trim();
            const pace = document.getElementById("pace").value;
            const focus = document.getElementById("focus").value;

            let genre = "";
            let message = "";

            if (focus === "competition" && pace === "fast") {
                genre = "Action / Shooter";
                message = `${name}, your best match is Action / Shooter games because you enjoy fast-paced competition and quick reactions.`;
            } else if (focus === "story") {
                genre = "Role-Playing";
                message = `${name}, your best match is Role-Playing games because you seem to enjoy story, character growth, and immersive worlds.`;
            } else if (focus === "exploration" || pace === "slow") {
                genre = "Survival / Exploration";
                message = `${name}, your best match is Survival / Exploration games because you seem to enjoy discovery, planning, and open-ended progress.`;
            } else if (focus === "fear") {
                genre = "Horror";
                message = `${name}, your best match is Horror games because you enjoy atmosphere, tension, and suspenseful experiences.`;
            } else {
                genre = "Adventure";
                message = `${name}, your best match is Adventure games because they offer a balanced mix of action, exploration, and story.`;
            }

            result.textContent = `${message} Recommended genre: ${genre}.`;
        });
    }
});