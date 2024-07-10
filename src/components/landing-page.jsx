import React, { useEffect, useState } from "react";
import "./landingpage.css"; // Adjust the path as necessary
import Navbar from "./Navbar";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./nav-pages/Home";
import About from "./nav-pages/About";
import Details from "./nav-pages/Details";
import Contact from "./nav-pages/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dateTimer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(dateTimer);
  }, []);

  const formatTime = (date) => {
    const hrs = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    const secs = date.getSeconds().toString().padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getDayOfCode = () => {
    const startDate = new Date(2024, 6, 1); // 1st July 2024
    const differenceInTime = currentDate.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)) + 1;
    return differenceInDays;
  };

  return (
    <Router>
      <div>
        <br />
        <br />
        <Link to="/" className="link-no-underline">
          <h1>Coding Solutions.</h1>
        </Link>
        <br />
        <br />
        <Navbar />

        {/* Small grey box */}
        <div className="details">
          <br />
          <p2>date: {formatDate(currentDate)}</p2>
          <br />
          <br />

          <Link to="/About" className="link-no-underline">
            <div className="changecolor"> 
              <p2>{getDayOfCode()} of 30 days code</p2> 
            </div> 
          </Link>

          <p className="backgroundclock">
            <div className="m-smalclock m-smallbox--44">
              <FontAwesomeIcon icon={faClock} /> - {formatTime(currentTime)}
            </div>
          </p>
        </div>

        {/* Blueish Box */}
        <div className="l-details2">
          <div className="moveboxes">
            <div className="m-smallbox m-smallbox--44">
              <FontAwesomeIcon icon={faInstagram} />
            </div>

            <div className="m-smallbox m-smallbox--45">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="m-smallbox m-smallbox--46">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="m-smallbox m-smallbox--47">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>

          <p className="textdetails">phone</p>
          <p className="number">+27 61 813 5059</p>
          <hr className="smallerline" />
          <p className="textdetails">email</p>
          <p className="number">princemsimango27@gmail.com</p>
          
          {/* PDF Download Button */}
          <a href="/Exam Pointers.pdf" download="Exam Pointers.pdf">
            <button className="pdfbutton">Download PDF</button>
          </a>
        </div>

        {/* Information Box - Section */}
        <div className="l-informationbox">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default LandingPage;
 
