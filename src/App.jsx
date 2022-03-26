import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/custom.css";
import AboutUs from "./screens/about-us";
import ContactUs from "./screens/contact-us";
import Home from "./screens/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
