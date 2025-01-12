document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('main .hero input');

    // Highlight input on focus
    inputField.addEventListener('focus', () => {
        inputField.style.borderColor = '#ff7373';
    });

    inputField.addEventListener('blur', () => {
        inputField.style.borderColor = '#ff5252';
    });

    // Smooth scroll effect for links
    document.querySelectorAll('header ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`${link.textContent} clicked!`); // Log clicked menu
        });
    });
});
