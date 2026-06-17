// app.js - Chelsea Guardian Website Interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chelsea Guardian Modern Website Loaded');
    
    // Simple smooth scrolling for internal links if added
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
