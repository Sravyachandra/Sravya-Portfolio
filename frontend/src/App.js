import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    // Add custom navigation handler
    const handleNavigation = (e) => {
      const target = e.target.closest('button[data-section]');
      if (target) {
        const section = target.getAttribute('data-section');
        setCurrentSection(section);
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  return (
    <div className="min-h-screen page-container">
      <Header />
      <div className={`section-wrapper section-${currentSection}`}>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
