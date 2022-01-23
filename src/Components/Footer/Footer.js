import React from 'react';
import AboutFooter from './AboutFooter';
import CompanyFooter from './CompanyFooter';
import './Footer.css';
import ServicesFooter from './ServicesFooter';
import Socials from './Socials';

function Footer() {
  return (
  <div className='Footer' >


    <AboutFooter 
    className='Footer1'
     About='About' 
     title='Autospa Hand Wash is an eco-friendly hand car
     wash and detailing service based in Portland.'
     
     />
    

    <ServicesFooter  
    className='Footer1'
    Service='Service'
    title1='Carpet Wash'
    title2='Exterior Hand Wash'
    title3='Wheel Shine'
    title4='In & Out Window Cleaning'

    />

    <CompanyFooter  
 className='Footer1'
    Company='Company'
    title1='About'
    title2='Contact Us'
    title3='Services'
    title4='Map'
    
    />
    <Socials />
 
  </div>
  )
}

export default Footer;
