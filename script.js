const audio = document.getElementById('meuAudio');
const button = document.getElementById('audioButton');
const icon = document.getElementById('audioIcon');

// Se o áudio começar pausado, aplica o pulso
if (audio.paused) {
    button.classList.add('pulsing');
}

// Tenta tocar automaticamente
audio.play().catch(() => {
    console.log("Autoplay bloqueado pelo navegador");
});

// Alterna play/pause ao clicar no botão
button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z"/>';
        button.classList.remove('pulsing');
    } else {
        audio.pause();
        icon.innerHTML = '<path d="M16 12c0-1.77-1.02-3.29-2.5-4.03v8.06C14.98 15.29 16 13.77 16 12z"/>';
        button.classList.add('pulsing');
    }
});
