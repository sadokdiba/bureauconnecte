# Le Bureau Connecté - Website

A professional bilingual (EN/FR) business website built with vanilla HTML5, CSS3, and JavaScript. Features a modular component system and JSON-based translation management.

## 🚀 Live Demo
**Website:** [https://sadokdiba.github.io/bureauconnecte/](https://sadokdiba.github.io/bureauconnecte/)

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript ES6+
- **Translation System:** JSON files with localStorage persistence  
- **Architecture:** Component-based modular design
- **Styling:** Custom CSS with responsive design
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Google Fonts (Inter, Poppins)

## 📂 Project Structure

```
bureau-connecté/
├── index.html                    # Homepage
├── pages/
│   └── about.html               # About page
├── assets/
│   ├── css/
│   │   └── styles.css           # Main stylesheet
│   ├── js/
│   │   ├── components.js        # Component loader system
│   │   └── language-switcher.js # Bilingual translation system
│   ├── translations/
│   │   ├── en.json             # English translations
│   │   └── fr.json             # French translations
│   └── images/
│       ├── logo.png            # Business logo
│       └── favicon.ico         # Site favicon
├── includes/                    # Shared HTML components
│   ├── header-home.html        # Homepage header
│   ├── header.html             # Subpage header
│   ├── footer.html             # Homepage footer
│   └── footer-subpage.html     # Subpage footer
└── LICENSE                     # Copyright protection
```

## ⚙️ Key Features

### 🌍 Bilingual System
- Automatic language detection with welcome modal
- JSON-based translations for easy content management
- localStorage persistence for user language preference
- Seamless EN/FR switching without page reload

### 🧩 Component Architecture
- Modular header/footer system using JavaScript injection
- DRY principle implementation for shared components
- Automatic component loading based on page context

### � Responsive Design
- Mobile-first approach with desktop enhancement
- Transparent glass navigation effects on mobile
- Smooth CSS transitions and professional animations

## � Development Setup

### Quick Start
```bash
# Clone the repository
git clone https://github.com/sadokdiba/bureauconnecte.git
cd bureauconnecte

# Start local development server (choose one)
python3 -m http.server 8080        # Python
npx http-server -p 8080            # Node.js
php -S localhost:8080              # PHP
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Component System Usage

Add placeholders in your HTML:
```html
<div id="header-placeholder"></div>
<!-- Your page content -->
<div id="footer-placeholder"></div>
```

Include the component loader:
```html
<script src="../assets/js/components.js"></script>
```

The system automatically loads the correct components for each page.

### Translation System

Add translatable content with `data-translate` attributes:
```html
<h1 data-translate="welcome.title">Welcome</h1>
<p data-translate="about.description">About us...</p>
```

Translations are managed in JSON files:
```json
// assets/translations/en.json
{
  "welcome": {
    "title": "Welcome to Le Bureau Connecté"
  },
  "about": {
    "description": "Professional office solutions in Montreal"
  }
}
```

### Development Tools

Reset language prompt for testing:
```javascript
// Run in browser console
localStorage.removeItem('languagePrompted');
localStorage.removeItem('selectedLanguage');
location.reload();
```

## � Customization

### Adding New Pages
1. Create HTML file with component placeholders
2. Add translations to JSON files
3. Update navigation in header components

### Styling
- Main styles: `assets/css/styles.css`
- CSS custom properties for consistent theming
- Mobile-first responsive breakpoints

### Adding New Languages
1. Create new JSON file in `assets/translations/`
2. Update language options in `language-switcher.js`
3. Add language toggle buttons in header components

---

## 📄 License & Copyright

**© 2024 Le Bureau Connecté. All rights reserved.**

This project and all its contents are proprietary and confidential. See [LICENSE](./LICENSE) file for complete terms.

For licensing inquiries: sadokdiba@icloud.com