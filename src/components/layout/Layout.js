// Layout.js

import React from "react";

// Header 컴포넌트
function Header() {
    return (
        <header style={styles.header}>
            <h1 style={{ margin: 0 }}>My Page</h1>
            <nav>
                <a href="/" style={styles.link}>Home</a>
                <a href="/about" style={styles.link}>About</a>
            </nav>
        </header>
    );
}

// Footer 컴포넌트
function Footer() {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} My Page. All Rights Reserved.</p>
        </footer>
    );
}

// Layout 컴포넌트
function Layout({ children }) {
    return (
        <>
            <Header />
            <div id="fullpage">{children}</div>
            <Footer />
        </>
    );
}

// 스타일 객체
const styles = {
    header: {
        backgroundColor: "#ff9a9e",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
    },
    link: {
        color: "#fff",
        margin: "0 10px",
        textDecoration: "none",
        fontSize: "1rem",
    },
    footer: {
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
    },
};

export default Layout;
