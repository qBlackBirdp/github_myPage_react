// ParallaxLayout.js

import React, { useEffect } from "react";
import Rellax from "rellax";

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
        <>
            <header className="rellax" style={styles.header}>
                <h1>My Page</h1>
                <nav>
                    <a href="/" style={styles.link}>Home</a>
                    <a href="/about" style={styles.link}>About</a>
                </nav>
            </header>
            <main style={styles.main}>{children}</main>
            <footer className="rellax" style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} My Page. All Rights Reserved.</p>
            </footer>
        </>
    );
}

const styles = {
    header: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ff9a9e",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
        color: "#fff",
    },
    link: {
        color: "#fff",
        margin: "0 10px",
        textDecoration: "none",
    },
    footer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
        zIndex: 10,
    },
};

export default ParallaxLayout;
