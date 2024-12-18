// moonPhaseService.js

const BASE_URL = "http://64.110.98.105:5555/api/moon/phase";

export const fetchMoonPhase = async (date) => {
    try {
        const response = await fetch(`${BASE_URL}?date=${date}`);
        if (!response.ok) {
            throw new Error("Failed to fetch moon phase data.");
        }
        return await response.json(); // 성공하면 JSON 반환
    } catch (error) {
        console.error("Error fetching moon phase:", error.message);
        return null; // 오류 발생 시 null 반환
    }
};
