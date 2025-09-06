import React from "react";

import HomePage from "./pages/HomePage";
import {Route, Router, Routes} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" component={HomePage} />
                <Route path="/" component={HomePage} />
            </Routes>
        </Router>
    )}
