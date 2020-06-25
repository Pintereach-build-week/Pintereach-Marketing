const navSlide = () => {
    const toggleButton = document.querySelector('.toggleBtn');
    const nav = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation a')
        // toogles nav
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        // toggle animation
        toggleButton.classList.toggle('toggle');
    });


}
navSlide();