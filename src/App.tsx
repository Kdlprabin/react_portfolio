import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/hero-section'
import ProjectsSection from './components/projects-section'
import AboutSection from './components/about-section'
import React from 'react'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </>
  )
}

export default App
