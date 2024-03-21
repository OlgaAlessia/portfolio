import React, { useState, useEffect } from "react";
import jsonData from "../data.json"
import Project from "./Project";
import "./Projects.css";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadData = JSON.parse(JSON.stringify(jsonData.projects));
        setProjects(loadData);
    }, []);

    return (

        <section id="projects" className="section">
            <div className="title">
                <h2>My Projects</h2>
            </div>
            <div className="container-projects">

                {projects.map(project => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        testUsername={project.testUsername}
                        testPassword={project.testPassword}
                        languages={project.languages}
                        hrefCode={project.hrefCode}
                        hrefRender={project.hrefRender}
                        imgSrc={project.imgSrc}
                    />
                ))}
            </div>

        </section>

    );
}

export default Projects;