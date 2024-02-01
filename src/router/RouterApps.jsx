import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.jsx";
import Contact from "../pages/Contact/Contact.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
