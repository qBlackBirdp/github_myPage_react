// MainPage.js

import React from "react";
import FullPageLayout from "./layout/FullPageLayout";
import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function MainPage() {
    return (
        <FullPageLayout>
            <WelcomeSection />
            <AboutSection />
            <ContactSection />
        </FullPageLayout>
    );
}

export default MainPage;
