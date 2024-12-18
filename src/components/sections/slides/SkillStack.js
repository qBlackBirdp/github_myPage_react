// SkillStack.js

import React from "react";
import "./SkillStack.css";

function SkillStack() {
    return (
        <div className="skill-stack">
            {/* Back-end */}
            <div className="stack-category">
                <h2>Back-end</h2>
                <div className="icons">
                    <div className="icon">
                        <img src="/icons/java.svg" alt="Java" />
                        <p>Java</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/springboot.svg" alt="Spring Boot" />
                        <p>Spring Boot</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/python.svg" alt="Python" />
                        <p>Python</p>
                    </div>
                </div>
            </div>

            {/* Database */}
            <div className="stack-category">
                <h2>Database</h2>
                <div className="icons">
                    <div className="icon">
                        <img src="/icons/mysql.svg" alt="MySQL" />
                        <p>MySQL</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/mariadb.svg" alt="MariaDB" />
                        <p>MariaDB</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/postgresql.svg" alt="PostgreSQL" />
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </div>

            {/* Front-end */}
            <div className="stack-category">
                <h2>Front-end</h2>
                <div className="icons">
                    <div className="icon">
                        <img src="/icons/html5.svg" alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/css3.svg" alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/javascript.svg" alt="JS" />
                        <p>JavaScript</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/react.svg" alt="React" />
                        <p>React</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/tailwindcss.svg" alt="Tailwind" />
                        <p>Tailwind</p>
                    </div>
                </div>
            </div>

            {/* Version Control */}
            <div className="stack-category">
                <h2>Version Control</h2>
                <div className="icons">
                    <div className="icon">
                        <img src="/icons/git.svg" alt="Git" />
                        <p>Git</p>
                    </div>
                </div>
            </div>

            {/* Collaboration */}
            <div className="stack-category">
                <h2>Collaboration</h2>
                <div className="icons">
                    <div className="icon">
                        <img src="/icons/github.svg" alt="GitHub" />
                        <p>GitHub</p>
                    </div>
                </div>
            </div>

            {/* Deployment */}
            <div className="stack-category">
                <h2>Deployment</h2>
                <div className="icons">
                    <div className="icon">
                        <img src="/icons/docker.svg" alt="Docker" />
                        <p>Docker</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/aws.svg" alt="AWS" />
                        <p>AWS</p>
                    </div>
                    <div className="icon">
                        <img src="/icons/terraform.svg" alt="Terraform" />
                        <p>Terraform</p>
                    </div>
                </div>
            </div>

            {/* CI/CD */}
            <div className="stack-category">
                <h2>CI/CD</h2>
                <div className="icons">
                    <div className="icon">
                        <img src="/icons/githubactions.svg" alt="GitHub Actions" />
                        <p>GitHub Actions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillStack;
