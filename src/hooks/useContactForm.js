// useContactForm.js

import { useState } from "react";

export function useContactForm() {
    const [fromName, setFromName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const formData = {
            name: fromName,
            email: userEmail,
            message: message,
        };

        try {
            const response = await fetch("https://formspree.io/f/xdkoqzbp", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // 성공 시 폼 초기화
                setFromName("");
                setUserEmail("");
                setMessage("");
                return true; // 성공 여부 반환
            } else {
                return false; // 실패 여부 반환
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            return false;
        }
    };

    return {
        fromName,
        setFromName,
        userEmail,
        setUserEmail,
        message,
        setMessage,
        handleSubmit,
    };
}
