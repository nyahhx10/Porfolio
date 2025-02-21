import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import About from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
