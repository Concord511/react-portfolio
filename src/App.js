import React, { useState } from 'react';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import Footer from './components/Footer/Footer';

function App() {
  
  const [navPoints] = useState([
    {name: 'About'},
    {name: 'Portfolio'},
    {name: 'Contact'},
  ]);
  
  const [currentNav, setCurrentNav] = useState(navPoints[0]);
  
  return (
    <div>
      <Header navPoints={navPoints} currentNav={currentNav} setCurrentNav={setCurrentNav}/>
      <Page currentNav={currentNav}/>
      <Footer />
    </div>
  );
}

export default App;
