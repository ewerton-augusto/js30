function playSound(e) {
    const keyButton = document.querySelector(`div[data-key="${e?.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e?.keyCode}"]`);

    if (!audio) return;
    if (!keyButton) return;
    
    keyButton.classList.add("key-pressed");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e?.propertyName !== 'transform') return;
    this?.classList.remove("key-pressed")
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

document.addEventListener('keydown', playSound);