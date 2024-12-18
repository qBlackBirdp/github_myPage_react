// MyProjectsSlide.js

import React from "react";
import projectData from "./projectData";
import useMoonPhase from "../../../../hooks/useMoonPhase";
import "./MyProjectsSlide.css";

function MyProjectsSlide() {
    const { moonPhase, emoji } = useMoonPhase();

    return (
        <div className="slide my-projects-slide" style={{ backgroundColor: "#F5F0E6", color: "#3E2723" }}>
            <h1>
                My Projects <span style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{emoji}</span>
            </h1>
            <p style={{ marginBottom: "30px" }}>
                Click to visit the repository of each project.
            </p>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.icon}
                            </a>
                            {project.serviceLink && (
                                <a href={project.serviceLink} target="_blank" rel="noopener noreferrer">
                                    {project.serviceIcon}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjectsSlide;
