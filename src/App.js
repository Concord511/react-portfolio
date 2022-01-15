import React, { useState } from 'react';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import Footer from './components/Footer/Footer';

function App() {
  
  const [navPoints] = useState([
    {name: 'About'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ]);
  
  const [currentNav, setCurrentNav] = useState(navPoints[0]);
  
  return (
    <div className="app__appBody">
      <Header navPoints={navPoints} currentNav={currentNav} setCurrentNav={setCurrentNav}/>
      <Page currentNav={currentNav}/>
      <Footer />
    </div>
  );
}

export default App;
