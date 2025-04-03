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