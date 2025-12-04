const links = document.querySelectorAll('a');
const clickSound = new Audio('../audio/click.m4a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.href;
        clickSound.currentTime = 0;
        clickSound.play();
        setTimeout(() => {
            window.location.href = href;
        }, 720);
    });
});