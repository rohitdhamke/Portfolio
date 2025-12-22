// Mobile Menu Toggle
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('mobile-menu');
const icon = btn.querySelector('ion-icon');

btn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    
    if (nav.classList.contains('hidden')) {
        icon.setAttribute('name', 'menu-outline');
    } else {
        icon.setAttribute('name', 'close-outline');
    }
});

// Close Mobile Menu on Link Click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.add('hidden');
        icon.setAttribute('name', 'menu-outline');
    });
});

// Navbar Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.replace('bg-dark-bg/80', 'bg-dark-bg/95');
    } else {
        header.classList.remove('shadow-md');
        header.classList.replace('bg-dark-bg/95', 'bg-dark-bg/80');
    }
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('pointer-events-auto');
    } else {
        backToTopBtn.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('pointer-events-auto');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Reveal Animation (Simple Intersection Observer)
const revealElements = document.querySelectorAll('section > div');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    el.classList.add('opacity-0'); // Initial state
    revealObserver.observe(el);
});
