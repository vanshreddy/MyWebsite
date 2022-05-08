import React,{Suspense} from "react";
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import { Routes,Route } from "react-router-dom";
import Invalidpage from "./Pages/Invalidpage";
import Resume from "./Pages/Resume";
import 'bootstrap/dist/css/bootstrap.css';


import Info from "./Pages/Info";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/About" element={<Info />} />
      <Route exact path="/Resume" element={<Resume/>} />
      <Route  path="/Projects" element={<Projects />} />
      <Route  path="*" element={<Invalidpage />} />
    </Routes>
    
  );
}
