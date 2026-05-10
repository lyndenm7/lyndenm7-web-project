alert("JavaScript loaded");
console.log("script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("genre-form");
    const result = document.getElementById("genre-result");

    console.log("form:", form);
    console.log("result:", result);

    if (!form || !result) {
        console.log("form or result element not found");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("player-name").value.trim();
        const pace = document.getElementById("pace").value;
        const focus = document.getElementById("focus").value;

        console.log("name:", name);
        console.log("pace:", pace);
        console.log("focus:", focus);

        let genre = "";
        let message = "";

        if (focus === "competition" && pace === "fast") {
            genre = "Action / Shooter";
            message = `${name}, your best match is ${genre} because you enjoy fast-paced competition and quick reactions.`;
        } else if (focus === "story") {
            genre = "Role-Playing";
            message = `${name}, your best match is ${genre} because you seem to enjoy story, character growth, and immersive worlds.`;
        } else if (focus === "exploration" || pace === "slow") {
            genre = "Survival / Exploration";
            message = `${name}, your best match is ${genre} because you seem to enjoy discovery, planning, and open-ended progress.`;
        } else if (focus === "fear") {
            genre = "Horror";
            message = `${name}, your best match is ${genre} because you enjoy tension, suspense, and atmosphere.`;
        } else {
            genre = "Adventure";
            message = `${name}, your best match is ${genre} because you seem to enjoy a mix of action, exploration, and story.`;
        }

        result.textContent = message;
        console.log("result written:", message);
    });
});