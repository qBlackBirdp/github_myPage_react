// Layout.js

import React from "react";
import "./Layout.css"; // CSS 파일 import

const PUBLIC_URL = process.env.PUBLIC_URL || "";

// Header 컴포넌트
function Header() {
    return (
        <header className="header">
            <h1>My Page</h1>
            <nav>
                <a href={`${PUBLIC_URL}/#section1`}>Home</a>
                <a href={`${PUBLIC_URL}/#section2`}>About</a>
                <a href={`${PUBLIC_URL}/#section3`}>Contact</a>
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
