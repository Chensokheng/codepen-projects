var audio = document.getElementById("mySong");

function playMusic() {
    if(audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}