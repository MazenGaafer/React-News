import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GeneralNews from './components/GeneralNews';
import SportsNews from './components/SportsNews';
import Notfound from './components/Notfound';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<GeneralNews />} />
        <Route path="/sports" element={<SportsNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
