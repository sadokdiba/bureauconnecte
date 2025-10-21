/**
 * Le Bureau Connecté - Component System
 * Copyright (c) 2024 Le Bureau Connecté. All rights reserved.
 * 
 * This code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution is strictly prohibited.
 * 
 * Contact: 514-582-4850
 * Address: 7591 St-Michel, Montreal, H2A 3A4
 */

// Component loader utility for shared headers and footers
function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            initializeNavigation();
            if (window.languageSwitcher) {
                setTimeout(() => {
                    window.languageSwitcher.setupToggle();
                    window.languageSwitcher.applyTranslations();
                }, 100);
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

function initializeNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.replaceWith(mobileToggle.cloneNode(true));
        const newMobileToggle = document.querySelector('.mobile-toggle');
        
        newMobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                newMobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                newMobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                newMobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--pure-white)';
            header.style.backdropFilter = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const isHomepage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html');
    
    if (document.getElementById('header-placeholder')) {
        const headerPath = isHomepage ? './includes/header-home.html' : '../includes/header.html';
        loadComponent('header-placeholder', headerPath);
    }
    
    if (document.getElementById('footer-placeholder')) {
        const footerPath = isHomepage ? './includes/footer.html' : '../includes/footer-subpage.html';
        loadComponent('footer-placeholder', footerPath);
    }
    
    initializeNavigation();
});