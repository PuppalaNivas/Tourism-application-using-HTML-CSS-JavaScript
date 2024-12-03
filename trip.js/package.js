document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const sideNavbar = document.querySelector('.side-navbar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sideNavbar.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sideNavbar.classList.remove('active');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (sideNavbar && menuToggle && 
            !sideNavbar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            sideNavbar.classList.remove('active');
        }
    });

    // Video replay
    const video = document.querySelector('#myVideo');
    if (video) {
        video.addEventListener('ended', () => {
            video.play();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                sideNavbar.classList.remove('active');
            }
        });
    });
});