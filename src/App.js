import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ParallaxLayout from "./components/layout/ParallaxLayout";
import "./index.css";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <Router basename="/github_myPage_react">
            <ParallaxLayout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </ParallaxLayout>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                theme="light"
                style={{ zIndex: 9999 }}
            />
        </Router>
    );
}

export default App;
