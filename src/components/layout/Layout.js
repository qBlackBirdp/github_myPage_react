// Layout.js

import React from "react";
import "./Layout.css"; // CSS 파일 import

// Header 컴포넌트
function Header() {
    return (
        <header className="header">
            <h1>My Page</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header>
    );
}

// Footer 컴포넌트
function Footer() {
    return (
        <footer className="footer">
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

export default Layout;
