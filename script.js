document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});
function toggleMenu() {
    const menu = document.querySelector('nav ul.menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded successfully!");
});
