import "./App.css";
import RouterApps from "./router/RouterApps.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <RouterApps />
      <Footer />
    </>
  );
}

export default App;
