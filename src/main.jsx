import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
       <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
       </Routes>
    </Router>
  </StrictMode>
);
