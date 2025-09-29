document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const header = document.querySelector('header');

    menuToggle.addEventListener('click', () => {
        header.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});