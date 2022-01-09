import React, { useState } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

function Header() {

    const [navPoints] = useState([
        {name: 'About'},
        {name: 'Portfolio'},
        {name: 'Contact'},
        {name: 'Resume'},
    ]);

    const [currentNav, setCurrentNav] = useState(navPoints[0]);

    return (
        <div className="header__container">
            <h1>Ian Remington Holmes</h1>
            <Nav
                navPoints={navPoints}
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
            />
        </div>
    )
}

export default Header;