// WelcomeSection.js

import React from "react";
import useMoonPhase from "../../hooks/useMoonPhase";

function WelcomeSection() {
    const { moonPhase, emoji } = useMoonPhase(); // 달 이모티콘과 위상 정보 가져오기

    return (
        <div className="section bg-[#EED9C4] text-center py-12 px-5">
            <h1 className="text-4xl font-bold mb-5 flex justify-center items-center">
                Welcome to BlackBird Home!{" "}
                <span className="ml-3 text-4xl">{emoji}</span>
            </h1>
            <p className="text-lg mb-8 text-[#3E2723]">
                개발자 한영신을 소개합니다.
            </p>
            <p className="text-base font-bold text-[#6E243D]">
                오늘의 달 위상:{" "}
                <span className="text-[#3E2723] font-bold">{moonPhase}</span>
            </p>
        </div>
    );
}

export default WelcomeSection;
