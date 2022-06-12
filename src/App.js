import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {


  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div className="App">
      <Nav setContactSelected={setContactSelected}></Nav>
      <main>
        {!contactSelected ? (
          <Hero></Hero>
          
        ) : (
          <>
            <Resume></Resume>
            <Portfolio></Portfolio>
            <About></About>
            <Contact></Contact>
          </>
        )}
        
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
