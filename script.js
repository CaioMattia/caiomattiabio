const audio = document.getElementById('audio');
const button = document.getElementById('audioButton');
const icon = document.getElementById('audioIcon');

let isPlaying = false;

audio.play().then(() => {
    isPlaying = true;
    button.classList.add('playing');
}).catch(() => {
    console.log('Autoplay blocked');
});

button.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        button.classList.remove('playing');
        icon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';
        isPlaying = false;
    } else {
        audio.play();
        button.classList.add('playing');
        icon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>';
        isPlaying = true;
    }
});
