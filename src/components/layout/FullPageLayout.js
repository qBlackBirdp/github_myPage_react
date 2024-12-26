// FullPageLayout.js

import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

function FullPageLayout({ children }) {
    useEffect(() => {
        const fullPageInstance = new fullpage("#fullpage", {
            autoScrolling: true,
            navigation: true,
            scrollHorizontally: true, // 수평 슬라이드 지원
            anchors: ["section1", "section2", "section3"],
            navigationTooltips: ["Welcome", "About", "Contact"],
            showActiveTooltip: true,
            controlArrows: true, // 수평 슬라이드 화살표 활성화

            afterLoad: (origin, destination, direction) => {
                const header = document.querySelector('.header');
                if (header) {
                    // 트랜지션 추가
                    header.style.transition = "background-color 0.3s ease";

                    // 배경색 변경
                    if (destination.anchor === 'section1') {
                        header.style.backgroundColor = '#6E243D';
                    } else if (destination.anchor === 'section2') {
                        header.style.backgroundColor = '#243D6E';
                    } else if (destination.anchor === 'section3') {
                        header.style.backgroundColor = '#946A6FFF';
                    }
                }
            }
        });

        return () => {
            if (window.fullpage_api) {
                window.fullpage_api.destroy("all");
            }
        }
    }, []);

    return <div id="fullpage">{children}</div>;
}

export default FullPageLayout;
