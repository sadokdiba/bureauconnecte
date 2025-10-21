// Language Switcher System with JSON translations
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en';
        this.hasPrompted = localStorage.getItem('languagePrompted') === 'true';
        this.selectedLang = localStorage.getItem('selectedLanguage') || 'en';
        this.translations = {};
        
        this.init();
    }
    
    async init() {
        await this.loadTranslations();
        this.currentLang = this.selectedLang;
        this.setupToggle();
        this.checkForPrompt();
        this.applyTranslations();
    }
    
    async loadTranslations() {
        try {
            const isSubpage = window.location.pathname.includes('/pages/');
            const basePath = isSubpage ? '../assets/translations/' : './assets/translations/';
            const enResponse = await fetch(basePath + 'en.json');
            const enTranslations = await enResponse.json();
            
            const frResponse = await fetch(basePath + 'fr.json');
            const frTranslations = await frResponse.json();
            
            this.translations = {
                en: enTranslations,
                fr: frTranslations
            };
        } catch (error) {
            console.error('Failed to load translations:', error);
            this.translations = {
                en: { home: 'Home', services: 'Services', contact: 'Contact', about: 'About' },
                fr: { home: 'Accueil', services: 'Services', contact: 'Contact', about: 'À propos' }
            };
        }
    }
    
    checkForPrompt() {
        if (!this.hasPrompted) {
            setTimeout(() => {
                this.showLanguagePrompt();
            }, 5000);
        }
    }
    
    showLanguagePrompt() {
        const modal = document.createElement('div');
        modal.className = 'language-prompt-modal';
        modal.innerHTML = `
            <div class="language-prompt-content">
                <div class="language-prompt-header">
                    <h3>🇨🇦 Welcome to Le Bureau Connecté</h3>
                </div>
                <div class="language-prompt-body">
                    <p>Choose your preferred language:</p>
                    <p><em>Choisissez votre langue préférée:</em></p>
                </div>
                <div class="language-prompt-buttons">
                    <button class="language-choice-btn english-btn" data-lang="en">
                        🇬🇧 English
                    </button>
                    <button class="language-choice-btn french-btn" data-lang="fr">
                        🇫🇷 Français
                    </button>
                </div>
                <small class="language-prompt-note">You can change this anytime using the toggle in the header</small>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelectorAll('.language-choice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedLang = e.target.dataset.lang;
                this.switchLanguage(selectedLang);
                localStorage.setItem('languagePrompted', 'true');
                this.hasPrompted = true;
                modal.remove();
            });
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.switchLanguage('en');
                localStorage.setItem('languagePrompted', 'true');
                this.hasPrompted = true;
                modal.remove();
            }
        });
    }
    
    setupToggle() {
        const toggle = document.querySelector('.language-toggle');
        if (!toggle) return;
        toggle.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
        toggle.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }
    
    switchLanguage(lang) {
        this.currentLang = lang;
        this.selectedLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        this.applyTranslations();
    }
    
    applyTranslations() {
        const translations = this.translations[this.currentLang];
        if (!translations) {
            console.error('No translations found for language:', this.currentLang);
            return;
        }
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'button') {
                    element.value = translations[key];
                } else if (element.tagName === 'SPAN' && element.parentElement.classList.contains('whatsapp-btn')) {
                    element.textContent = translations[key];
                } else if (element.tagName === 'SPAN' && element.parentElement.tagName === 'A') {
                    element.textContent = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            } else {
            }
        });
        this.updateLegacyContent(translations);
    }
    
    updateLegacyContent(translations) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text === 'Home' || text === 'Accueil') {
                link.textContent = translations.home;
            } else if (text === 'Services') {
                link.textContent = translations.services;
            } else if (text === 'Contact') {
                link.textContent = translations.contact;
            } else if (text === 'About' || text === 'À propos') {
                link.textContent = translations.about;
            }
        });
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) heroTitle.textContent = translations.heroTitle;
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = translations.heroSubtitle;
        
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) heroDescription.textContent = translations.heroDescription;
        const callBtn = document.querySelector('.btn-primary');
        if (callBtn && (callBtn.textContent.includes('Call') || callBtn.textContent.includes('Appelez'))) {
            callBtn.innerHTML = `<i class="fas fa-phone"></i> ${translations.callUs}`;
        }
        
        const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
        whatsappBtns.forEach(btn => {
            btn.innerHTML = `<i class="fab fa-whatsapp"></i> ${translations.whatsapp}`;
        });
        const servicesTitle = document.querySelector('#services .section-title, .services-preview .section-title');
        if (servicesTitle) servicesTitle.textContent = translations.servicesTitle;
        
        const servicesSubtitle = document.querySelector('#services .section-subtitle, .services-preview .section-subtitle');
        if (servicesSubtitle) servicesSubtitle.textContent = translations.servicesSubtitle;
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            
            if (index === 0 && title && desc) {
                title.textContent = translations.printingServices;
                desc.textContent = translations.printingDesc;
            } else if (index === 1 && title && desc) {
                title.textContent = translations.copyingScanning;
                desc.textContent = translations.copyingDesc;
            } else if (index === 2 && title && desc) {
                title.textContent = translations.officeAssistance;
                desc.textContent = translations.officeAssistanceDesc;
            } else if (index === 3 && title && desc) {
                title.textContent = translations.documentServices;
                desc.textContent = translations.documentDesc;
            }
        });
        const contactTitle = document.querySelector('.contact-info h2');
        if (contactTitle) contactTitle.textContent = translations.contactTitle;
        
        const contactDesc = document.querySelector('.contact-info .hero-description');
        if (contactDesc) contactDesc.textContent = translations.contactDescription;
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            const title = item.querySelector('h4');
            if (title) {
                const titleText = title.textContent.trim();
                if (titleText === 'Address' || titleText === 'Adresse') {
                    title.textContent = translations.address;
                } else if (titleText === 'Phone' || titleText === 'Téléphone') {
                    title.textContent = translations.phone;
                } else if (titleText === 'Metro Access' || titleText === 'Accès métro') {
                    title.textContent = translations.metroAccess;
                }
            }
        });
        const pageTitle = document.querySelector('.page-header h1');
        if (pageTitle) pageTitle.textContent = translations.aboutPageTitle;
        
        const pageSubtitle = document.querySelector('.page-header p');
        if (pageSubtitle) pageSubtitle.textContent = translations.aboutPageSubtitle;
        
        const whoWeAre = document.querySelector('.about-text h2');
        if (whoWeAre) whoWeAre.textContent = translations.whoWeAre;
        
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        if (aboutParagraphs[0]) aboutParagraphs[0].textContent = translations.aboutDesc1;
        if (aboutParagraphs[1]) aboutParagraphs[1].textContent = translations.aboutDesc2;
        
        const missionTitle = document.querySelector('.about-highlight h3');
        if (missionTitle) missionTitle.textContent = translations.ourMission;
        
        const missionText = document.querySelector('.about-highlight p');
        if (missionText) missionText.textContent = `"${translations.missionText}"`;
        const valuesTitle = document.querySelector('.values-section .section-title');
        if (valuesTitle) valuesTitle.textContent = translations.valuesTitle;
        
        const valuesSubtitle = document.querySelector('.values-section .section-subtitle');
        if (valuesSubtitle) valuesSubtitle.textContent = translations.valuesSubtitle;
        const valueCards = document.querySelectorAll('.value-card');
        valueCards.forEach((card, index) => {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            
            if (index === 0 && title && desc) {
                title.textContent = translations.personalService;
                desc.textContent = translations.personalServiceDesc;
            } else if (index === 1 && title && desc) {
                title.textContent = translations.qualityFirst;
                desc.textContent = translations.qualityFirstDesc;
            } else if (index === 2 && title && desc) {
                title.textContent = translations.reliability;
                desc.textContent = translations.reliabilityDesc;
            } else if (index === 3 && title && desc) {
                title.textContent = translations.communityFocus;
                desc.textContent = translations.communityFocusDesc;
            }
        });
        const whyChooseTitle = document.querySelector('.why-choose .section-title');
        if (whyChooseTitle) whyChooseTitle.textContent = translations.whyChooseTitle;
        
        const whyChooseSubtitle = document.querySelector('.why-choose .section-subtitle');
        if (whyChooseSubtitle) whyChooseSubtitle.textContent = translations.whyChooseSubtitle;
        const featureItems = document.querySelectorAll('.feature-item');
        featureItems.forEach((item, index) => {
            const title = item.querySelector('h4');
            const desc = item.querySelector('p');
            
            if (index === 0 && title && desc) {
                title.textContent = translations.convenientLocation;
                desc.textContent = translations.convenientLocationDesc;
            } else if (index === 1 && title && desc) {
                title.textContent = translations.bilingualService;
                desc.textContent = translations.bilingualServiceDesc;
            } else if (index === 2 && title && desc) {
                title.textContent = translations.whatsappReady;
                desc.textContent = translations.whatsappReadyDesc;
            } else if (index === 3 && title && desc) {
                title.textContent = translations.fullService;
                desc.textContent = translations.fullServiceDesc;
            } else if (index === 4 && title && desc) {
                title.textContent = translations.affordablePricing;
                desc.textContent = translations.affordablePricingDesc;
            } else if (index === 5 && title && desc) {
                title.textContent = translations.personalTouch;
                desc.textContent = translations.personalTouchDesc;
            }
        });
        const comingSoonTitle = document.querySelector('.coming-soon .section-title, .coming-soon h2');
        if (comingSoonTitle) comingSoonTitle.textContent = translations.comingSoonTitle;
        
        const comingSoonSubtitle = document.querySelector('.coming-soon .section-subtitle, .coming-soon p');
        if (comingSoonSubtitle) comingSoonSubtitle.textContent = translations.comingSoonSubtitle;
        const ctaTitle = document.querySelector('.cta-section h2');
        if (ctaTitle) ctaTitle.textContent = translations.ctaTitle;
        
        const ctaSubtitle = document.querySelector('.cta-section p');
        if (ctaSubtitle) ctaSubtitle.textContent = translations.ctaSubtitle;
        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) copyright.textContent = translations.copyright;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSwitcher;
}