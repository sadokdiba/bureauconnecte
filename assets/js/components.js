// Component loader utility for shared headers and footers
function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Re-initialize event listeners after loading components
            initializeNavigation();
            
            // Re-initialize language system if it exists
            if (window.languageSwitcher) {
                // Wait a bit for DOM to be ready
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

// Initialize navigation functionality
function initializeNavigation() {
    // Mobile menu toggle - PRODUCTION VERSION
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        // Remove existing listeners to prevent duplicates
        mobileToggle.replaceWith(mobileToggle.cloneNode(true));
        const newMobileToggle = document.querySelector('.mobile-toggle');
        
        newMobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon
            if (navMenu.classList.contains('active')) {
                newMobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                newMobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Close menu when clicking nav links
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                newMobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // Smooth scrolling for navigation links
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

// Header scroll effect
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

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the homepage or a subpage
    const isHomepage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html');
    
    // Load appropriate header
    if (document.getElementById('header-placeholder')) {
        const headerPath = isHomepage ? './includes/header-home.html' : '../includes/header.html';
        loadComponent('header-placeholder', headerPath);
    }
    
    // Load appropriate footer
    if (document.getElementById('footer-placeholder')) {
        const footerPath = isHomepage ? './includes/footer.html' : '../includes/footer-subpage.html';
        loadComponent('footer-placeholder', footerPath);
    }
    
    // Initialize navigation if components are already loaded
    initializeNavigation();
});