const navbar = document.querySelector('.topnav');
let lastScrollY = window.scrollY;
const scrollThreshold = 10;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return;

    const navbarHeight = navbar.offsetHeight;

    if (currentScrollY > lastScrollY) {
        navbar.style.transform = `translateY(-${navbarHeight}px)`;
        navbar.style.transition = 'transform 0.1s ease';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});

/* 
    Purpose: Hides navbar when scrolling down,
    brings it back when scrolling up.
*/