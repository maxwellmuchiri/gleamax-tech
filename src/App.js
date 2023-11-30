// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import SignList from './components/SignList';
import './App.css';
function App() {
  const signs = ['Metal Signs', 'Wooden Signs', 'Neon Signs', 'Custom Signs'];

  return (
    <div>
      <Navbar />
      <Landing />
      <SignList signs={signs} />
      <Footer />
    </div>
  );
}

export default App;
