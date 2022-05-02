import React from 'react';
import ContactUsForm from '../components/contactus-components/ContactUsForm';
import TopBanner from '../components/contactus-components/TopBanner';
import '../styles/ContactUs.css';



const ContactUs = () => {
    return (
        <>
            <TopBanner />
            <ContactUsForm />
        </>
    )
}

export default ContactUs;