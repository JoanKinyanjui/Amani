import React from 'react';
import Contact from '../Contact/Contact';
import Extra from '../Extra/Extra';
import Footer from '../Footer/Footer';
import MainView from '../Main/MainView';
import Services from '../Other Services/Services';
import Team from '../Team/Team';

function About() {
  return(
    <div>
        <MainView 
        title2='- ABOUT US -'
        className='MainView1'
        />
        <Services />
        <Extra />
        <Team />
        <Contact />
        <Footer />
    </div>
  )
}

export default About;
