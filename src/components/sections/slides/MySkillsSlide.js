// MySkillsSlide.js

import React from "react";
import SkillStack from "./SkillStack";

function MySkillsSlide() {
    return (
        <div className="slide" style={{ backgroundColor: "#D4A373", textAlign: "center" }}>
            <h1>My Skills</h1>
            <SkillStack />
        </div>
    );
}

export default MySkillsSlide;