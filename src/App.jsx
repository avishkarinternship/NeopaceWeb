import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VenturesSection from './components/VenturesSection';
import EmpowerSection from './components/EmpowerSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden flex flex-col items-center">
      <Navbar />
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        <HeroSection />
        <VenturesSection />
        <EmpowerSection />
        <ServicesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
