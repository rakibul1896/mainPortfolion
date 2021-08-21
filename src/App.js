import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Loading from './components/Loading/Loading';

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    AOS.init({
      offset: 200,
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className=" font-raleway-new selection:bg-selected-color selection:text-black select-text">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Navbar />
          <About />
          <WhatIDo />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
