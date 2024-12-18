// SkillCard.js

import React from "react";
import "./SkillCard.css";

function SkillCard({ category, skills }) {
    return (
        <div className="skill-card">
            <h2 className="skill-category">{category}</h2>
            <div className="skill-icons">
                {skills.map((skill) => (
                    <div className="icon" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;
