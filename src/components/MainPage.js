// MainPage.js

import React, { useEffect } from "react";
import { toast } from "react-toastify";
import FullPageLayout from "./layout/FullPageLayout";
import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function MainPage() {
    useEffect(() => {
        const visited = sessionStorage.getItem("visited");
        if (!visited) {
            console.log("Toast should appear now!");
            toast.info(" 🚀제 사이트 방문을 환영합니다! 저를 소개합니다!🔆", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                zIndex: 9999,
            });
            sessionStorage.setItem("visited", "true");
        }
    }, []);

    return (
        <FullPageLayout>
            <WelcomeSection />
            <AboutSection />
            <ContactSection />
        </FullPageLayout>
    );
}

export default MainPage;
