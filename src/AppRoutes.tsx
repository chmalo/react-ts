import React, {lazy, Suspense } from "react";
import {  BrowserRouter as Router, Routes, Route  } from "react-router-dom";

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));


function AppRoutes() {
  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </Suspense>
      </Router>
  )
}

export default AppRoutes;
