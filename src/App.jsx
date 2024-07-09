import { useEffect, useState } from "react";
import "./App.css";
import "./index.css"; 
import LandingPage from "./components/landing-page";
 
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    document.body.className = savedDarkMode ? "dark-mode" : "light-mode";
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className={toggleDarkMode}>
      <header>
        <button className="changebtn" onClick={toggleDarkMode}>
          {darkMode ? "🌙" : "🌞"}
        </button>
      </header>



      <LandingPage /> 
    </div>
  );
}

export default App;
