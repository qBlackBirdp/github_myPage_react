import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ParallaxLayout from "./components/layout/ParallaxLayout";
import "./index.css";

function App() {
    return (
        <Router basename="/github_myPage_react">
            <ParallaxLayout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </ParallaxLayout>
        </Router>
    );
}

export default App;
