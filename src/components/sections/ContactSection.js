// ContactSection.js

// ContactSection.js

import React from "react";
import { useContactForm } from "../../hooks/useContactForm";
import "./ContactSection.css";

function ContactSection() {
    const {
        fromName,
        setFromName,
        userEmail,
        setUserEmail,
        message,
        setMessage,
        status,
        handleSubmit,
    } = useContactForm();

    return (
        <div className="section contact-section" style={{ backgroundColor: "#fdecee" }}>
            <div className="section-container">
                <h1 className="section-title">Contact</h1>
                <p className="section-description">저에게 흥미가 있다면 연락주세요!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fromName">Name</label>
                        <input
                            id="fromName"
                            type="text"
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                            className="input-field"
                            placeholder="이름을 입력해주세요"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="input-field"
                            placeholder="id@email.com"
                        />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="input-field textarea-field"
                            placeholder="내용을 입력해주세요"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>

                {status && <p className="status-message">{status}</p>}
            </div>
        </div>
    );
}

export default ContactSection;
