document.getElementById("submit-button").addEventListener("click", function () {
    const audio = document.getElementById("button-sound");

    // Play the audio
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
});
