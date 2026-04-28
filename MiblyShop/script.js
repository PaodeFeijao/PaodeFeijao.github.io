document.addEventListener('DOMContentLoaded', () => {
    // ===== Sticky Navbar =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ===== Mobile Menu Toggle =====
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
        });
        // Close menu on link click
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => links.classList.remove('open'));
        });
    }

    // ===== Scroll Reveal Animation =====
    const revealEls = document.querySelectorAll(
        '.how-card, .spec-card, .feat-row, .faq-card, .price-card, .team-card, .testi-card, .gallery-phone, .wm-block, .useful-block'
    );

    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // ===== Demo Dropdown =====
    const demoSelect = document.getElementById('demoSelect');
    const demoGo = document.getElementById('demoGo');
    if (demoSelect && demoGo) {
        demoGo.addEventListener('click', () => {
            const url = demoSelect.value;
            if (url) {
                window.open(url, '_blank');
            }
        });
    }

    // ===== Smooth Scroll for Nav Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
