import React from 'react';
import Booking from '../Booking/Booking';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import MainView from '../Main/MainView';
import Packages from '../Packages/Packages';
import Who from '../Who/Who';

function Home() {
  return(
      <>
      <MainView 
      title2='YOUR CAR IS ALWAYS IN GREAT HANDS WITH US'
      title3='SERVICE POWERED BY HONESTY AND INTEGRITY'
      className='MainView'
       />
      <Who />
      <Packages/>
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
      </>
  )
}

export default Home;
