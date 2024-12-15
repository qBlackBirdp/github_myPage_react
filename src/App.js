import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />   {/* 메인 엔드포인트 */}
            </Routes>
        </Router>
    );
}

export default App;
