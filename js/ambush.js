const video = document.getElementById('ambush');

    video.addEventListener('ended', () => {
    console.log('Video ended, redirecting...');
    window.location.href = '../index.html';
}, 100);