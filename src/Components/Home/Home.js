import React from 'react';
import Booking from '../Booking/Booking';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import MainView from '../Main/MainView';
import Packages from '../Packages/Packages';
import Who from '../Who/Who';

function Home() {
  return(
      <>
      <MainView />
      <Who />
      <Packages />
      <Booking />
      <Gallery />
      <Footer />
      </>
  )
}

export default Home;
