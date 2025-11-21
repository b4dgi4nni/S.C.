/* ---------------------------------------------------------
   PROJECT: SABRINA COCCHIARA PORTFOLIO
   FILE: script.js
   DESCRIZIONE: Logica multilingua e interazioni UI.
   ---------------------------------------------------------
*/

// 1. SISTEMA DI TRADUZIONE
/* --- AGGIORNAMENTO script.js (Sostituisci l'oggetto translations) --- */
const translations = {
    en: {
        // Nav
        nav_home: "Home",
        nav_portfolio: "Portfolio",
        nav_about: "About Me",
        nav_contact: "Contact",
        footer_rights: "© 2024 Sabrina Cocchiara. All Rights Reserved.",
        
        // Portfolio
        port_title: "Selected Works",
        cat_urban: "Urban Shooting",
        cat_studio: "Studio Sessions",
        cat_runway: "Fashion Week",
        
        // About
        about_title: "Behind the Lens",
        about_bio: "Based between Italy and Wolfsburg, I bring a blend of Mediterranean passion and German precision to every shoot. Modeling is not just posing; it's acting without words, embodying a mood, an emotion, a story. My style is versatile, ranging from high fashion elegance to urban grit.",
        about_stats: "Measurements",
        stat_height: "Height",
        stat_eyes: "Eyes",
        stat_hair: "Hair",
        
        // Contact
        contact_title: "Let's Create Art",
        contact_sub: "Available for bookings in Italy, Germany & Worldwide.",
        form_name: "Your Name",
        form_email: "Your Email",
        form_msg: "Message",
        btn_send: "Send Request",
        btn_email_me: "Email Me Directly"
    },
    it: {
        // Nav
        nav_home: "Home",
        nav_portfolio: "Portfolio",
        nav_about: "Chi Sono",
        nav_contact: "Contatti",
        footer_rights: "© 2024 Sabrina Cocchiara. Tutti i diritti riservati.",
        
        // Portfolio
        port_title: "Lavori Selezionati",
        cat_urban: "Shooting Urbano",
        cat_studio: "Sessioni in Studio",
        cat_runway: "Settimana della Moda",
        
        // About
        about_title: "Dietro l'Obiettivo",
        about_bio: "Con base tra l'Italia e Wolfsburg, porto un mix di passione mediterranea e precisione tedesca in ogni scatto. Fare la modella non è solo posare; è recitare senza parole, incarnare un mood, un'emozione, una storia. Il mio stile è versatile, spaziando dall'eleganza dell'alta moda alla grinta urbana.",
        about_stats: "Misure",
        stat_height: "Altezza",
        stat_eyes: "Occhi",
        stat_hair: "Capelli",
        
        // Contact
        contact_title: "Creiamo Arte Insieme",
        contact_sub: "Disponibile per booking in Italia, Germania e nel mondo.",
        form_name: "Il tuo Nome",
        form_email: "La tua Email",
        form_msg: "Messaggio",
        btn_send: "Invia Richiesta",
        btn_email_me: "Inviami una Email"
    },
    de: {
        // Nav
        nav_home: "Startseite",
        nav_portfolio: "Portfolio",
        nav_about: "Über Mich",
        nav_contact: "Kontakt",
        footer_rights: "© 2024 Sabrina Cocchiara. Alle Rechte vorbehalten.",
        
        // Portfolio
        port_title: "Ausgewählte Werke",
        cat_urban: "Urban Shooting",
        cat_studio: "Studio-Sessions",
        cat_runway: "Modewoche",
        
        // About
        about_title: "Hinter der Linse",
        about_bio: "Zwischen Italien und Wolfsburg lebend, bringe ich eine Mischung aus mediterraner Leidenschaft und deutscher Präzision in jedes Shooting. Modeln ist nicht nur Posen; es ist Schauspiel ohne Worte. Mein Stil ist vielseitig und reicht von High-Fashion-Eleganz bis zu urbanem Charakter.",
        about_stats: "Maße",
        stat_height: "Größe",
        stat_eyes: "Augen",
        stat_hair: "Haare",
        
        // Contact
        contact_title: "Lass uns Kunst schaffen",
        contact_sub: "Verfügbar für Buchungen in Italien, Deutschland und weltweit.",
        form_name: "Dein Name",
        form_email: "Deine E-Mail",
        form_msg: "Nachricht",
        btn_send: "Anfrage Senden",
        btn_email_me: "E-Mail Senden"
    }
};
/* (Il resto delle funzioni changeLanguage e gli observer rimangono uguali) */

// Funzione per cambiare lingua
function changeLanguage(lang) {
    // Aggiorna tutti gli elementi con attributo 'data-i18n'
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Aggiorna stile pulsanti lingua
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Salva preferenza (opzionale, qui semplice sessione)
    localStorage.setItem('preferredLanguage', lang);
}

// 2. GESTIONE SCROLL NAVBAR
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 3. ANIMAZIONI FADE-IN ALLO SCROLL
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Anima solo una volta
        }
    });
}, observerOptions);

// Inizializzazione al caricamento
document.addEventListener('DOMContentLoaded', () => {
    // Imposta lingua (default EN o salvata)
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);

    // Attiva observer per animazioni
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});