# 🏢 Le Bureau Connecté# Le Bureau Connecté Website Structure



**Professional Office Solutions & Printing Services in Montreal**## Project Organization



A modern, bilingual (English/French) website for Le Bureau Connecté, your trusted office assistance partner located near Saint-Michel Metro in Montreal.```

bureau-connecté/

## 🌟 Features├── index.html                    # Homepage

├── assets/

### 🌍 **Bilingual Experience**│   ├── css/

- **Smart Language Detection**: Beautiful welcome modal for first-time visitors│   │   └── styles.css           # Consolidated CSS styles

- **Seamless Translation**: Complete EN/FR translation system with JSON-based architecture│   └── js/

- **Language Persistence**: User preferences saved across sessions│       ├── script.js            # Main JavaScript functionality

- **Professional Toggle**: Elegant language switcher in header│       └── components.js        # Component loader utility

├── includes/

### 🎨 **Modern Design**│   ├── header.html              # Shared header for subpages

- **Responsive Layout**: Perfect on desktop, tablet, and mobile│   ├── header-home.html         # Header for homepage

- **Professional Branding**: Consistent green theme with elegant typography│   └── footer.html              # Shared footer

- **Smooth Animations**: Polished user experience with CSS transitions└── pages/

- **Interactive Elements**: Hover effects and dynamic components    └── about.html               # About page



### 📱 **Technical Excellence**```

- **Component Architecture**: Modular header/footer system

- **JSON Translations**: Maintainable, scalable language files## Key Features

- **Modern CSS**: Custom properties, CSS Grid, Flexbox

- **Vanilla JavaScript**: Clean, dependency-free code### ✅ Organized Structure

- **SEO Optimized**: Proper meta tags and semantic HTML- **Separated CSS and JavaScript** into external files

- **Shared components** for headers and footers to avoid duplication

## 🚀 Live Demo- **Proper folder organization** with assets and pages separated



Visit the website: [Le Bureau Connecté](https://sadokdiba.github.io/bureauconnecte)### ✅ Navigation Order

- Home

## 📍 Location- Services

- Contact

**7591 ST MICHEL, MONTREAL, H2A 3A4**- About

- 🚇 Near Saint-Michel Metro Station

- 📞 Phone: 514-582-4850### ✅ Consistent Information

- 💬 WhatsApp Available- **Address**: 7591 ST MICHEL, MONTREAL, H2A 3A4

- **Phone**: 514-582-4850 (calls & WhatsApp)

## 🛠 Technology Stack- **Metro Access**: Saint-Michel Station

- **Same location info** on both homepage and about page

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)

- **Translation System**: JSON-based with localStorage persistence### ✅ Responsive Design

- **Icons**: Font Awesome 6.4.0- Mobile-friendly navigation

- **Fonts**: Google Fonts (Inter, Poppins)- Responsive grid layouts

- **Architecture**: Component-based modular design- Touch-friendly buttons and links



## 📂 Project Structure## How to Use Shared Components (Optional Enhancement)



```If you want to use the shared components system:

bureau-connecté/

├── index.html                 # Homepage1. Replace header/footer HTML in your pages with:

├── pages/   ```html

│   └── about.html             # About page   <div id="header-placeholder"></div>

├── assets/   <!-- page content -->

│   ├── css/   <div id="footer-placeholder"></div>

│   │   └── styles.css         # Main stylesheet   ```

│   ├── js/

│   │   ├── language-switcher.js  # Bilingual system2. Include the components script:

│   │   ├── components.js      # Component loader   ```html

│   │   └── script.js          # Main JavaScript   <script src="../assets/js/components.js"></script>

│   ├── translations/   ```

│   │   ├── en.json           # English translations

│   │   └── fr.json           # French translationsThis will automatically load the appropriate header and footer for each page.

│   └── images/

│       └── logo.png          # Business logo## Development Notes

├── includes/

│   ├── header-home.html      # Homepage header- All CSS is consolidated in `assets/css/styles.css`

│   ├── header.html           # Subpage header- JavaScript functionality is in `assets/js/script.js`

│   ├── footer.html           # Homepage footer- Shared components are available in the `includes/` folder

│   └── footer-subpage.html   # Subpage footer- Navigation maintains consistent order across all pages

└── README.md                 # Project documentation- Location information is synchronized between all pages
```

## 🌐 Services Offered

### 🖨️ **Printing Services**
- High-quality document printing
- Business cards and flyers
- Professional formatting

### 📄 **Copying & Scanning**
- Fast and reliable copying
- Document scanning services
- Multiple format support

### 💻 **Office Assistance**
- Personalized office support
- Document formatting
- Computer assistance

### 📋 **Document Services**
- Professional document preparation
- Administrative support
- Custom formatting solutions

## 🔧 Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/sadokdiba/bureauconnecte.git

# Navigate to project directory
cd bureauconnecte

# Start local server (Python 3)
python3 -m http.server 8080

# Or with Node.js
npx http-server -p 8080

# Visit http://localhost:8080
```

### Testing Language Prompt
```javascript
// Clear localStorage in browser console to test language prompt
localStorage.removeItem('languagePrompted');
localStorage.removeItem('selectedLanguage');
location.reload();
```

## 📄 License

© 2024 Le Bureau Connecté. All rights reserved.

## 📧 Contact

For business inquiries:
- **Phone**: 514-582-4850
- **WhatsApp**: [Message Us](https://wa.me/15145824850)
- **Location**: 7591 ST MICHEL, MONTREAL, H2A 3A4

---

*Built with ❤️ in Montreal for the Montreal community*