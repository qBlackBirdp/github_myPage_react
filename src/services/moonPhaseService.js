// moonPhaseService.js

const BASE_URL = "https://www.starinfo.qyef.site/api/moon/phase";

export const fetchMoonPhase = async (date) => {
    try {
        console.log("Fetching moon phase data...");
        console.log(`Request URL: ${BASE_URL}?date=${date}`); // 요청 URL 확인

        const response = await fetch(`${BASE_URL}?date=${date}`);
        console.log("Response Status:", response.status); // 응답 상태 코드 확인

        if (!response.ok) {
            throw new Error(`Failed to fetch moon phase data. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response Data:", data); // 성공 시 데이터 확인
        return data;
    } catch (error) {
        console.error("Error fetching moon phase:", error.message);
        return null; // 오류 발생 시 null 반환
    }
};
