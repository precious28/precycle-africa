import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/custom.css";
import AboutUs from "./screens/about-us";
import ContactUs from "./screens/contact-us";
import Home from "./screens/home";
import PartnersPage from "./screens/partners";
import VolunteersPage from "./screens/volunteers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ContactUs />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/volunteers" element={<VolunteersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
