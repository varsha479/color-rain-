function setMood(mood) {
    const body = document.body;
    const message = document.getElementById('mood-message');

   
    body.className = '';

    if (mood === 'happy') {
        body.classList.add('happy');
        message.innerText = 'YAY! Everything is sunshine and rainbows! 🌈✨';
    } else if (mood === 'chill') {
        body.classList.add('chill');
        message.innerText = 'Take a deep breath… Relax… 🧘💙';
    } else if (mood === 'chaotic') {
        body.classList.add('chaotic');
        message.innerText = 'AHHH! CHAOS REIGNS! 🎉🔥🌀';
    }
}
