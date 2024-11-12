// src/pages/Home.js
import React from 'react';
import About from '../components/About';
import Project from '../components/Project';

function Home() {
    const featuredProjects = [
        { title: 'Project 1', description: 'Description for project 1', image: '/path-to-image1.jpg', link: '#' },
        { title: 'Project 2', description: 'Description for project 2', image: '/path-to-image2.jpg', link: '#' },
    ];

    return (
        <main>
            <About />
            <section className="projects">
                <h2>Projects</h2>
                <div className="projects-list">
                    {featuredProjects.map((proj, index) => (
                        <Project key={index} {...proj} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;
