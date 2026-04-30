import React, { useEffect, useState } from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const ContactUs = () => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('rfidia_lang');
      if (saved && ['fr', 'en', 'it'].includes(saved)) {
        setLanguage(saved);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('rfidia_lang', language);
    }
  }, [language]);

  const i18nContent = {
    fr: {
      metaTitle: 'Contactez-nous',
      metaDesc: 'Contactez RFIDIA pour decouvrir nos solutions RFID innovantes et optimiser vos processus.',
      navbar: {
        home: 'Accueil',
        about: 'A propos',
        solutions: 'Solutions',
        services: 'Services',
        contact: 'Contactez-nous',
        company: 'Entreprise',
        usefulLinks: 'Liens utiles',
        usefulPages: 'Pages utiles',
        language: 'Langue',
        french: 'Francais',
        english: 'English',
        italian: 'Italiano',
      },
      footer: {
        followUs: 'Suivez-nous :',
        companyTitle: 'Notre Entreprise',
        about: 'A Propos',
        solutions: 'Nos Solutions',
        sectors: "Secteurs d'Activite",
        projects: 'Nos Realisations',
        contact: 'Contact',
        contactTitle: 'Contactez-nous',
        address: 'Adresse',
        email: 'Email',
        phone: 'Telephone',
        newsletter: 'Newsletter',
        newsletterDesc: 'Restez informe sur les dernieres innovations en tracabilite et IoT.',
        newsletterPlaceholder: 'Votre adresse email',
        newsletterAria: "S'abonner",
        copyright: 'Tous droits reserves.',
        privacy: 'Politique de confidentialite',
        legal: 'Mentions legales',
        brandDesc:
          'Leader tunisien de la tracabilite intelligente. Nous accompagnons les entreprises dans leur transformation digitale grace a nos solutions RFID, IoT et codes-barres haute performance.',
      },
      hero: {
        title: 'Contactez-nous',
        desc: 'Chez RFIDIA, nous creons des solutions RFID innovantes pour optimiser vos processus et renforcer votre efficacite.',
      },
      cards: {
        chatTitle: 'Echangez avec nous',
        chatDescPrefix: 'Notre equipe est disponible pour vous accompagner du',
        chatDescStrong: 'lundi au vendredi',
        writeToUs: 'Nous ecrire',
        emailTitle: 'Envoyez un email',
        emailDesc: 'Ecrivez-nous pour discuter de votre projet et recevoir une reponse rapide.',
        callTitle: 'Appelez-nous',
        callDesc: "Besoin d'un echange direct ? Appelez-nous pour parler de votre besoin.",
      },
      form: {
        heading: 'Parlez-nous de votre projet',
        desc:
          'Dites-nous ce que vous souhaitez optimiser. Nous vous repondrons avec une proposition adaptee a votre activite et a vos objectifs.',
        firstName: 'Prenom',
        lastName: 'Nom',
        phone: 'Telephone',
        email: 'Email',
        projectType: 'Type de projet',
        projectTypePlaceholder: 'Selectionnez',
        projectTypeOptions: ['Site web', 'Application mobile', 'Solution RFID / IoT', 'Autre'],
        budget: 'Budget approximatif',
        budgetPlaceholder: 'Votre budget',
        buildQuestion: "Qu'est-ce que vous voulez construire?",
        buildPlaceholder: 'Decrivez votre besoin',
        message: 'Message',
        messagePlaceholder: 'Expliquez-nous votre besoin',
        submit: 'Envoyer le message',
      },
    },
    en: {
      metaTitle: 'Contact Us',
      metaDesc: 'Contact RFIDIA to discover our innovative RFID solutions and optimize your operations.',
      navbar: {
        home: 'Home',
        about: 'About',
        solutions: 'Solutions',
        services: 'Services',
        contact: 'Contact Us',
        company: 'Company',
        usefulLinks: 'Useful Links',
        usefulPages: 'Useful Pages',
        language: 'Language',
        french: 'French',
        english: 'English',
        italian: 'Italian',
      },
      footer: {
        followUs: 'Follow us:',
        companyTitle: 'Our Company',
        about: 'About',
        solutions: 'Our Solutions',
        sectors: 'Industries',
        projects: 'Our Projects',
        contact: 'Contact',
        contactTitle: 'Contact Us',
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        newsletter: 'Newsletter',
        newsletterDesc: 'Stay informed about the latest innovations in traceability and IoT.',
        newsletterPlaceholder: 'Your email address',
        newsletterAria: 'Subscribe',
        copyright: 'All rights reserved.',
        privacy: 'Privacy Policy',
        legal: 'Legal Notice',
        brandDesc:
          'Tunisian leader in smart traceability. We support companies in their digital transformation through high-performance RFID, IoT and barcode solutions.',
      },
      hero: {
        title: 'Contact Us',
        desc: 'At RFIDIA, we build innovative RFID solutions to optimize your operations and strengthen your efficiency.',
      },
      cards: {
        chatTitle: 'Talk with us',
        chatDescPrefix: 'Our team is available to support you from',
        chatDescStrong: 'Monday to Friday',
        writeToUs: 'Write to us',
        emailTitle: 'Send an email',
        emailDesc: 'Write to us to discuss your project and receive a quick response.',
        callTitle: 'Call us',
        callDesc: 'Need a direct exchange? Call us to discuss your requirements.',
      },
      form: {
        heading: 'Tell us about your project',
        desc:
          'Let us know what you want to optimize. We will reply with a proposal tailored to your business and goals.',
        firstName: 'First name',
        lastName: 'Last name',
        phone: 'Phone',
        email: 'Email',
        projectType: 'Project type',
        projectTypePlaceholder: 'Select',
        projectTypeOptions: ['Website', 'Mobile app', 'RFID / IoT solution', 'Other'],
        budget: 'Approximate budget',
        budgetPlaceholder: 'Your budget',
        buildQuestion: 'What do you want to build?',
        buildPlaceholder: 'Describe your needs',
        message: 'Message',
        messagePlaceholder: 'Tell us what you need',
        submit: 'Send message',
      },
    },
    it: {
      metaTitle: 'Contattaci',
      metaDesc: 'Contatta RFIDIA per scoprire le nostre soluzioni RFID innovative e ottimizzare i tuoi processi.',
      navbar: {
        home: 'Home',
        about: 'Chi siamo',
        solutions: 'Soluzioni',
        services: 'Servizi',
        contact: 'Contattaci',
        company: 'Azienda',
        usefulLinks: 'Link utili',
        usefulPages: 'Pagine utili',
        language: 'Lingua',
        french: 'Francese',
        english: 'Inglese',
        italian: 'Italiano',
      },
      footer: {
        followUs: 'Seguici:',
        companyTitle: 'La nostra azienda',
        about: 'Chi siamo',
        solutions: 'Le nostre soluzioni',
        sectors: 'Settori',
        projects: 'I nostri progetti',
        contact: 'Contatto',
        contactTitle: 'Contattaci',
        address: 'Indirizzo',
        email: 'Email',
        phone: 'Telefono',
        newsletter: 'Newsletter',
        newsletterDesc: 'Resta aggiornato sulle ultime innovazioni in tracciabilita e IoT.',
        newsletterPlaceholder: 'Il tuo indirizzo email',
        newsletterAria: 'Iscriviti',
        copyright: 'Tutti i diritti riservati.',
        privacy: 'Informativa sulla privacy',
        legal: 'Note legali',
        brandDesc:
          'Leader tunisino nella tracciabilita intelligente. Supportiamo le aziende nella trasformazione digitale con soluzioni RFID, IoT e codici a barre ad alte prestazioni.',
      },
      hero: {
        title: 'Contattaci',
        desc: 'In RFIDIA creiamo soluzioni RFID innovative per ottimizzare i tuoi processi e migliorare l efficienza.',
      },
      cards: {
        chatTitle: 'Parla con noi',
        chatDescPrefix: 'Il nostro team e disponibile per supportarti dal',
        chatDescStrong: 'lunedi al venerdi',
        writeToUs: 'Scrivici',
        emailTitle: 'Invia una email',
        emailDesc: 'Scrivici per discutere del tuo progetto e ricevere una risposta rapida.',
        callTitle: 'Chiamaci',
        callDesc: 'Hai bisogno di un confronto diretto? Chiamaci per parlare delle tue esigenze.',
      },
      form: {
        heading: 'Parlaci del tuo progetto',
        desc:
          'Dicci cosa vuoi ottimizzare. Ti risponderemo con una proposta adatta alla tua attivita e ai tuoi obiettivi.',
        firstName: 'Nome',
        lastName: 'Cognome',
        phone: 'Telefono',
        email: 'Email',
        projectType: 'Tipo di progetto',
        projectTypePlaceholder: 'Seleziona',
        projectTypeOptions: ['Sito web', 'App mobile', 'Soluzione RFID / IoT', 'Altro'],
        budget: 'Budget approssimativo',
        budgetPlaceholder: 'Il tuo budget',
        buildQuestion: 'Che cosa vuoi costruire?',
        buildPlaceholder: 'Descrivi le tue esigenze',
        message: 'Messaggio',
        messagePlaceholder: 'Spiegaci la tua esigenza',
        submit: 'Invia messaggio',
      },
    },
  };

  const t = i18nContent[language] || i18nContent.fr;

  return (
    <Layout title={t.metaTitle} desc={t.metaDesc}>
      <Navbar classOption="navbar-light" language={language} onLanguageChange={setLanguage} labels={t.navbar} />
      <PageHeader
        title={t.hero.title}
        desc={t.hero.desc}
        backgroundImage="/rfidia_bg_pink_no_text.svg"
      />
      <ContactCard content={t.cards} />
      <ContactForm content={t.form} />
      <Footer translations={t.footer} />
    </Layout>
  );
};

export default ContactUs;
