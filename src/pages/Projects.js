// src/pages/Projects.js
import React from 'react';
import Project from '../components/Project';
import '../components/Project.css';
function Projects() {
    const projectList = [
        { title: 'Project 1', description: 'Description for project 1', image: '/path-to-image1.jpg', link: '#' },
        { title: 'Project 2', description: 'Description for project 2', image: '/path-to-image2.jpg', link: '#' },
        // Thêm nhiều dự án hơn vào đây
    ];

    return (
        <main>
            <h2>My Projects</h2>
            <div className="projects-list">
                {projectList.map((proj, index) => (
                    <Project key={index} {...proj} />
                ))}
            </div>
        </main>
    );
}

export default Projects;
