// IntroduceSlide.js

import React from "react";
import "./IntroduceSlide.css";

function IntroduceSlide() {
    return (
        <div className="slide" style={{backgroundColor: "#d0d0f5"}}> {/* fullpage.js가 제어 */}
            <div className="introduce-slide"> {/* 내부 컨테이너 */}
                <div className="image-section">
                    <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
                    <img src="/images/work.jpg" alt="Work" className="work-image" />
                </div>
                <div className="details-section">
                    <h1 className="introduce-title">Introduce Me</h1>
                    <p className="name">
                        한영신
                        <a href="https://github.com/qBlackBirdp" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/github.svg" alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://velog.io/@tablo2525/posts" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/velog.svg" alt="Velog" className="social-icon" />
                        </a>
                        <a href="https://www.youtube.com/@%ED%95%9C%EC%98%81%EC%8B%A0-n7q" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/youtube.svg" alt="Youtube" className="social-icon" />
                        </a>
                    </p>
                    <ul className="contact-info">
                        <li>📞 010-2589-6326</li>
                        <li>✉️ blackbird9711@gmail.com</li>
                        <li>🎸 특기: 음악</li>
                    </ul>
                    <div className="education">
                    <h3>교육과정</h3>
                        <p>꾸준한 학습 <br/>
                            프로젝트 AI & Open API를 활용한 웹/앱 개발자 양성 과정 <br/>
                            | 2024.05.29 ~ 2024.12.16</p>
                    </div>
                    <div className="education">
                        <h3>학력</h3>
                        <p>목원대학교 일반대학원 | 2020.03 ~ 2022.08 (졸업)</p>
                        <p>목원대학교 재즈학부 | 2018.03 ~ 2020.07 (졸업)</p>
                    </div>
                    <div className="activities">
                        <h3>기타 활동 사항</h3>
                        <p>관저실용음악학원 - 베이스강사 | 2024.02 ~ -</p>
                        <p>용남중학교 - 방과후강사 | 2022.03 ~ 2022.12</p>
                        <p>용남중학교 - 자유학기강사 | 2022.07 ~ 2022.12</p>
                        <p>동아마이스터고등학교 | 2021.03 ~ 2022.12</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroduceSlide;