// Sticky Header with Color Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,  // Adjust for sticky header height
            behavior: 'smooth'
        });
    });
});

// Fade-In Animation on Scroll
const sections = document.querySelectorAll('.container section');

const options = {
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    fadeInObserver.observe(section);
});

// Skill and Project Card Interaction
const skillProjectCards = document.querySelectorAll('.skill, .project');

skillProjectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('::before').style.transition = 'top 0.3s ease, left 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.querySelector('::before').style.transition = 'top 0.3s ease, left 0.3s ease';
    });
});

// Form Submission Message (from previous example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').classList.remove('hidden');
    document.getElementById('contactForm').reset();
});
