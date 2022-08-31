import React from 'react';
import { MdEmail, MdFacebook, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import SectionTitle from '../component/SectionTitle';
import ContactInformationItem from './ContactInformationItem';
import '../component/ContactSection.css';

import ContactForm from '../component/ContactForm';

export default function ContactSection() {
  return (

    <div className='container'>
        <SectionTitle subheading="hi this form created by Shiva"/>
        

        <div className='wrapper'>
            <div className='left'>
              
              <ContactInformationItem icon={<MdLocalPhone></MdLocalPhone>} text="00614500000"/>
              <ContactInformationItem icon={<MdFacebook></MdFacebook>} text="infoFacebookpage"/>
              <ContactInformationItem icon={<MdEmail></MdEmail>} text="info@gmail.com"/>
              <ContactInformationItem text='Sydney,Australia'/>

            </div>

            <div className='right'>
              <ContactForm></ContactForm>

            </div>
        </div>
    </div>
  );
}
