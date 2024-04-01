var audio = document.getElementById('audio');
var video = document.getElementById('vidx');
var target = document.getElementById("enter");

function playMedia() {
    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());
    audio.play();
    video.play();
}

target.addEventListener("click", playMedia);
target.addEventListener("touchstart", playMedia);
