// SkillStack.js

import React from "react";
import SkillCard from "./SkillCard";
import skillsData from "./skillsData";
import "./SkillStack.css";

function SkillStack() {
    return (
        <div className="skill-stack mb-9">
            {skillsData.map((categoryData) => (
                <SkillCard
                    key={categoryData.category}
                    category={categoryData.category}
                    skills={categoryData.skills}
                />
            ))}
        </div>
    );
}

export default SkillStack;
