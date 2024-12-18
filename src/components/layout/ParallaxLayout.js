// ParallaxLayout.js

import React, { useEffect } from "react";
import Rellax from "rellax";
import Layout from "./Layout"; // Layout 컴포넌트 가져오기

function ParallaxLayout({ children }) {
    useEffect(() => {
        const rellax = new Rellax(".rellax", {
            speed: -2,
            center: false,
            vertical: true,
            horizontal: false,
        });

        return () => {
            if (rellax) rellax.destroy();
        };
    }, []);

    return (
        <Layout>
            {/* Parallax 효과를 적용할 요소 */}
            <div className="rellax" style={styles.background}></div>
            {children}
        </Layout>
    );
}

const styles = {
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#ffede1", // 예제 배경색
    },
};

export default ParallaxLayout;
