import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

function Header(props) {

    const {navPoints, setCurrentNav, currentNav } = props;

    return (
        <div className="header__container">
            <h1>Ani Remington Holmes</h1>
            <Nav
                navPoints={navPoints}
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
            />
        </div>
    )
}

export default Header;