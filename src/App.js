import React from 'react';
import NavBar from './Navbar';
import Header from './header';
import Hero from './hero';
import AppSection from './AppSection';
import Card from './card';
import Footer from './footer';
import Copyright from './copyright';
import ScrollToTop from './scrollToTop';
import Modals from './modals';


const App = () => {

  return (
    <div>
      <NavBar />
      <Header />
      <Hero />
      <AppSection />
      <Card />
      <Footer />
      <Copyright />
      <ScrollToTop />
      <Modals />

    </div >
  );
};

export default App;