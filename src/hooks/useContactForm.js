// useContactForm.js

import { useState } from "react";
import emailjs from "emailjs-com";

export function useContactForm() {
    const [fromName, setFromName] = useState(""); // 발신자 이름
    const [userEmail, setUserEmail] = useState(""); // 사용자가 입력한 이메일
    const [message, setMessage] = useState(""); // 메시지
    const [status, setStatus] = useState(""); // 상태 메시지

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const templateParams = {
                from_name: fromName,
                reply_to: userEmail, // 사용자가 입력한 이메일을 템플릿 변수에 전달
                message: message,
            };

            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const userId = process.env.REACT_APP_EMAILJS_USER_ID;

            await emailjs.send(serviceId, templateId, templateParams, userId);

            setStatus("이메일이 성공적으로 전송되었습니다!");
            setFromName("");
            setUserEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error sending email:", error.message);
            setStatus("이메일 전송에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return {
        fromName,
        setFromName,
        userEmail,
        setUserEmail,
        message,
        setMessage,
        status,
        handleSubmit,
    };
}
