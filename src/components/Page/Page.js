import React from 'react';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import './Page.css';

function Page({ currentNav }) {
    
    const renderPage = () => {
        switch (currentNav.name) {
            case "About":
                return <About />
            case "Portfolio":
                return <Portfolio />
            case "Contact":
                return <Contact />
            case "Resume":
                return <Resume />
            default:
                return <About />
        }
    }
    
    return(
        <main>
            {renderPage()}
        </main>
    )
}

export default Page;