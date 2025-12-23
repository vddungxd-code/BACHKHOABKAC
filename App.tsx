
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FastQuote from './components/FastQuote';
import ContactForm from './components/ContactForm';
import ConstructionCalculator from './components/ConstructionCalculator';
import Footer from './components/Footer';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero onOpenQuote={() => setShowQuoteModal(true)} />
        <div id="services">
            <Services />
        </div>
        <div id="projects">
            <Projects />
        </div>
        <div id="fast-quote">
            <FastQuote />
        </div>
        <div id="testimonials">
            <Testimonials />
        </div>
        <div id="contact">
            <ContactForm />
        </div>
        <div id="calculator">
            <ConstructionCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
