import React from 'react'
import Header from '../components/Contact/Header'
import ContactInfoSection from '../components/Contact/ContactMethods'
import ContactFormSection from '../components/Contact/Form'


export const ContactPage = () => {
  return (
    <div>
        <Header/>
        <ContactInfoSection/>
        <ContactFormSection/>
    </div>
  )
}
