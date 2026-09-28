import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contract from "./pages/Contract";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contract />} />
    </Routes>
  );
}

export default App;