import Home from "./pages/Home";
import { NavbarComponent } from "./components/navbar/NavbarComponent";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { CPanel } from "./pages/CPanel";
import { FooterComponent } from "./components/footer/FooterComponent";
import { LoginComponent } from "./components/cpanel/auth/LoginComponent";

const App = () => {
  // console.clear();
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cpanel" element={<CPanel />} />
        <Route path="/projects/:id/:id" element={<ProjectDetails />} />
        <Route path="/cpanel/login" element={<LoginComponent />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterComponent />
    </Router>
  );
};

export default App;
