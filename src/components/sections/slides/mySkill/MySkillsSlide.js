// MySkillsSlide.js

import React from "react";
import SkillStack from "./SkillStack";
import "./MySkillsSlide.css"; // CSS 파일 임포트

function MySkillsSlide() {
    return (
        <div className="slide my-skills-slide" style={{ backgroundColor: "#D4A373"}}>
            <h1 className="skills-title">My Skills</h1>
            <SkillStack />
        </div>
    );
}

export default MySkillsSlide;
