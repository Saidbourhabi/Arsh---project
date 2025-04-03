 // Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

 // Dropdown functionality for mobile
const dropdowns = document.querySelectorAll('.Dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
    const heroImg = document.querySelector('.hero-img');
    
    // Make the animation slightly organic
    heroImg.style.animationDuration = `${5 + Math.random() * 1}s`; // 5-6 seconds
    
    // Optional: Add event listeners for interaction
    heroImg.addEventListener('mouseenter', () => {
        heroImg.style.animationPlayState = 'paused';
    });
    
    heroImg.addEventListener('mouseleave', () => {
        heroImg.style.animationPlayState = 'running';
    });
});