import React from 'react';
import avatarAbout from '../img/chuong2.jpg'
import './About.css';


function About() {
    return (
        <section className="about">
            <h2>About Me</h2>
            <p>
                Hello! I'm a front-end developer with a passion for building beautiful and responsive websites. 
                I enjoy working with modern technologies to create interactive and user-friendly experiences.
            </p>
            <img src={avatarAbout} alt="Profile" className="profile-pic" />
        </section>
    );
}

export default About;
