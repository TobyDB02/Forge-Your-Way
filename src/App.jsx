import React from "react";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MenoPauseCoaching from "./pages/MenopauseCoaching";
import MidlifeCoaching from "./pages/MidlifeCoaching";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/menopause"} element={<MenoPauseCoaching />} />
                <Route path={"/midlife"} element={<MidlifeCoaching />} />
                <Route path={"/pricing"} element={<Pricing />} />
                <Route path={"/privacy"} element={<PrivacyPolicy />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    )}
