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

// Active Section Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const mobileLinks = document.querySelectorAll('.mobile-link');

const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            // Desktop Highlight
            navLinks.forEach(link => {
                if (link.classList.contains('bg-white')) return; // Skip the "Contact Me" CTA button

                const span = link.querySelector('span');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.remove('text-gray-300');
                    link.classList.add('text-white');
                    if(span) span.classList.add('w-full');
                } else {
                    link.classList.add('text-gray-300');
                    link.classList.remove('text-white');
                    if(span) span.classList.remove('w-full');
                }
            });

            // Mobile Highlight
            mobileLinks.forEach(link => {
                 if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('text-indigo-400', 'bg-gray-800');
                    link.classList.remove('text-gray-300');
                } else {
                    link.classList.remove('text-indigo-400', 'bg-gray-800');
                    link.classList.add('text-gray-300');
                }
            });
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of section is visible

sections.forEach(section => activeObserver.observe(section));

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

// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorGlow = document.querySelector('.cursor-glow');

if (cursorDot && cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    // Track mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    // Smooth follow for glow
    function animateGlow() {
        const lerp = 0.15;
        glowX += (mouseX - glowX) * lerp;
        glowY += (mouseY - glowY) * lerp;
        
        cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(animateGlow);
    }
    animateGlow();

    // Text & Content Detection (Hide Glow)
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, input, textarea, label, span:not(.text-gradient)');
    textElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('glow-hidden'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('glow-hidden'));
    });

    // Interactive Detection (Intensify Glow)
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .box');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            document.body.classList.remove('glow-hidden'); // Priority: Interactive > Text
            document.body.classList.add('glow-active');
        });
        
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('glow-active');
        });
    });

    // Click Animations
    document.addEventListener('mousedown', () => document.body.classList.add('clicking'));
    document.addEventListener('mouseup', () => document.body.classList.remove('clicking'));
}

