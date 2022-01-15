import React from 'react';
import './Nav.css';

function Nav(props) {
    
    const {
        navPoints,
        setCurrentNav,
        currentNav
    } = props;
    
    return (
        <nav>
            <ul className="nav__listContainer">
                {navPoints.map((navPoint) => (
                    <li key={navPoint.name} className={`nav__li ${navPoint.name === currentNav.name && 'nav__isActive'}`}>
                            <span className="nav__link" onClick ={() => setCurrentNav(navPoint)}>
                                {navPoint.name}
                            </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;