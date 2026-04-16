import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const ContactUs = () => {
  return (
    <Layout title="Contactez-nous" desc="Contactez RFIDIA pour découvrir nos solutions RFID innovantes et optimiser vos processus.">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Contactez-nous"
        desc="Chez RFIDIA, nous créons des solutions RFID innovantes pour optimiser vos processus et renforcer votre efficacité."
      />
      <ContactCard />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default ContactUs;
