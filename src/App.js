import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      {/* <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main> */}
      <About></About>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
