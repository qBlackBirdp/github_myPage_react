// useContactForm.js

import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export function useContactForm() {
    const [fromName, setFromName] = useState(""); // 발신자 이름
    const [userEmail, setUserEmail] = useState(""); // 사용자가 입력한 이메일
    const [message, setMessage] = useState(""); // 메시지

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const templateParams = {
                from_name: fromName,
                reply_to: userEmail,
                message: message,
            };

            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const userId = process.env.REACT_APP_EMAILJS_USER_ID;

            await emailjs.send(serviceId, templateId, templateParams, userId);

            // 성공 시 토스트 메시지
            toast.success("이메일이 성공적으로 전송되었습니다!");

            // 폼 초기화
            setFromName("");
            setUserEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error sending email:", error.message);
            // 실패 시 토스트 메시지
            toast.error("이메일 전송에 실패했습니다. 다시 시도해주세요.");
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
