// ContactSection.js

import React from "react";
import { useContactForm } from "../../hooks/useContactForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactSection.css";

function ContactSection() {
    const {
        fromName,
        setFromName,
        userEmail,
        setUserEmail,
        message,
        setMessage,
        handleSubmit,
    } = useContactForm();

    const validateForm = () => {
        if (!fromName.trim()) {
            toast.error("Name을 입력해주세요!");
            return false;
        }
        if (!userEmail.trim()) {
            toast.error("Email을 입력해주세요!");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            toast.error("올바른 Email 형식을 입력해주세요!");
            return false;
        }
        if (!message.trim()) {
            toast.error("Message를 입력해주세요!");
            return false;
        }
        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const success = await handleSubmit();
            if (success) {
                toast.success("폼이 성공적으로 제출되었습니다!");
            } else {
                toast.error("이메일 전송에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    return (
        <div className="section contact-section" style={{ backgroundColor: "#fdecee" }}>
            <div className="section-container">
                <h1 className="section-title">Contact</h1>
                <p className="section-description">저에게 흥미가 있다면 연락주세요!</p>
                <form className="contact-form" onSubmit={onSubmit}>
                    {/* Name */}
                    <fieldset className="form-group">
                        <label htmlFor="fromName" className="form-label">Name</label>
                        <input
                            id="fromName"
                            type="text"
                            placeholder="이름을 입력해주세요"
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                            className="input-field"
                        />
                    </fieldset>

                    {/* Email */}
                    <fieldset className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="id@email.com"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="input-field"
                        />
                    </fieldset>

                    {/* Message */}
                    <fieldset className="form-group full-width">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            placeholder="내용을 입력해주세요"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="input-field textarea-field"
                        />
                    </fieldset>

                    {/* Submit */}
                    <div className="form-actions">
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactSection;
