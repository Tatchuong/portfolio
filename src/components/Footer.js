import React from 'react';
import './Footer.css';



function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
}

export default Footer;
