// useMoonPhase.js

import { useEffect, useState } from "react";
import { fetchMoonPhase } from "../services/moonPhaseService";

const useMoonPhase = () => {
    const [moonPhase, setMoonPhase] = useState(""); // 달 위상 이름
    const [emoji, setEmoji] = useState("🌑"); // 기본 달 이모티콘

    useEffect(() => {
        const fetchPhaseData = async () => {
            const today = new Date().toISOString().split("T")[0]; // 오늘 날짜 yyyy-mm-dd 형식
            console.log(`📅 오늘 날짜: ${today}`);

            try {
                const data = await fetchMoonPhase(today);
                console.log("✅ API 응답 데이터:", data);

                if (data && data.phase_description) {
                    const phaseName = data.phase_description; // 달 위상 이름
                    setMoonPhase(phaseName);
                    console.log(`🌕 달 위상: ${phaseName}`);
                    updateEmoji(phaseName); // 이모티콘 업데이트
                } else {
                    console.warn("⚠️ 서버에서 유효한 데이터를 받지 못했습니다.");
                }
            } catch (error) {
                console.error("❌ API 요청 실패:", error.message);
            }
        };

        const updateEmoji = (phase) => {
            const phases = {
                "New Moon": "🌑",
                "Dark Moon": "🌚",
                "Waxing Crescent": "🌒",
                "First Quarter": "🌓",
                "Waxing Gibbous": "🌔",
                "Full Moon": "🌕",
                "Waning Gibbous": "🌖",
                "Last Quarter": "🌗",
                "Waning Crescent": "🌘",
                "Unknown Phase": "❓",
            };

            const selectedEmoji = phases[phase] || "🌑";
            console.log(`🔄 이모티콘 업데이트: ${selectedEmoji}`);
            setEmoji(selectedEmoji);
        };

        fetchPhaseData();
    }, []);

    return { moonPhase, emoji }; // 위상 이름과 이모티콘 반환
};

export default useMoonPhase;
