// FullPageLayout.js

import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

function FullPageLayout({ children }) {
    useEffect(() => {
        const fullPageInstance = new fullpage("#fullpage", {
            autoScrolling: true,
            navigation: true,
            anchors: ["section1", "section2", "section3"],
            navigationTooltips: ["Welcome", "About", "Contact"],
            showActiveTooltip: true,
        });

        return () => {
            if (window.fullpage_api) {
                window.fullpage_api.destroy("all");
            }
        };
    }, []);

    return <div id="fullpage">{children}</div>;
}

export default FullPageLayout;
