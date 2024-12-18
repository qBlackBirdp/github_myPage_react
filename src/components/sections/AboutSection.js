// AboutSection.js

import React, {useEffect, useRef} from "react";
import fullpage from "fullpage.js";
import "./AboutSection.css";
import MySkillsSlide from "./slides/mySkill/MySkillsSlide";
import MyProjectsSlide from "./slides/myProject/MyProjectsSlide";
import IntroduceSlide from "./slides/aboutMe/IntroduceSlide";

function AboutSection() {
    const sectionRef = useRef(null);
    let fullpageInstance = useRef(null);

    useEffect(() => {
        const initFullPage = () => {
            if (fullpageInstance.current) {
                fullpageInstance.current.destroy("all");
            }

            if (sectionRef.current) {
                fullpageInstance.current = new fullpage("#aboutSection", {
                    autoScrolling: false,
                    controlArrows: false, // 기본 화살표 비활성화
                    scrollHorizontally: true,
                    fitToSection: true,
                    slidesNavigation: true,
                });
            }

            // 왼쪽과 오른쪽 화살표 이벤트
            const leftArrow = document.querySelector(".fp-controlArrow.fp-prev");
            const rightArrow = document.querySelector(".fp-controlArrow.fp-next");

            if (leftArrow && rightArrow) {
                leftArrow.addEventListener("click", handleMoveLeft);
                rightArrow.addEventListener("click", handleMoveRight);
            }
        };

        const handleMoveLeft = () => {
            window.fullpage_api?.moveSlideLeft(); // 왼쪽 이동
        };

        const handleMoveRight = () => {
            window.fullpage_api?.moveSlideRight(); // 오른쪽 이동
        };

        const timer = setTimeout(initFullPage, 0);

        // 컴포넌트 언마운트 시 정리
        return () => {
            clearTimeout(timer);
            if (fullpageInstance.current) {
                fullpageInstance.current.destroy("all");
            }
        };
    }, []);

    return (
        <div id="aboutSection" ref={sectionRef} className="section">
            <div className="slide" style={{backgroundColor: "#fad0c4", textAlign: "center"}}>
                <h1>About Me</h1>
                <p style={{ marginBottom: "60px"}}>안녕하세요! 저는 풀스택 개발자입니다. 저를 더 알고 싶다면 옆으로 넘겨보세요!</p>
            </div>
            <IntroduceSlide />
            <MySkillsSlide />
            <MyProjectsSlide />
        </div>
    );
}

export default AboutSection;
