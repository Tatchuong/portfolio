import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <div className="logo">My Portfolio</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
