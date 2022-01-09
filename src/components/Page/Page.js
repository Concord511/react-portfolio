import React from 'react';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

function Page({ currentNav }) {
    
    const renderPage = () => {
        switch (currentNav.name) {
            case "About":
                return <About />
            case "Portfolio":
                return <Portfolio />
            case "Contact":
                return <Contact />
            default:
                return <About />
        }
    }
    
    return(
        <section>
            {renderPage()}
        </section>
    )
}

export default Page;