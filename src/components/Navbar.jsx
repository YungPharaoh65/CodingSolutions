import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="l-navbar">
      <div className="nav-container">
        <Link
          to="/Home"
          className={`link-no-underline ${activeLink === "/Home" ? "active" : ""}`}
          onClick={() => handleSetActiveLink("/Home")}
        >
          <div className={`m-box m-box--44 ${activeLink === "/Home" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faHouse} className="fontawesome" />
          </div>
        </Link>
      </div>

      <div className="nav-container">
        <Link
          to="/About"
          className={`link-no-underline ${activeLink === "/About" ? "active" : ""}`}
          onClick={() => handleSetActiveLink("/About")}
        >
          <div className={`m-box m-box--45 ${activeLink === "/About" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faAddressBook} className="fontawesome" />
          </div>
        </Link>
      </div>

      <div className="nav-container">
        <Link
          to="/Details"
          className={`link-no-underline ${activeLink === "/Details" ? "active" : ""}`}
          onClick={() => handleSetActiveLink("/Details")}
        >
          <div className={`m-box m-box--46 ${activeLink === "/Details" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faBriefcase} className="fontawesome" />
          </div>
        </Link>
      </div>

      <div className="nav-container">
        <Link
          to="/Contact"
          className={`link-no-underline ${activeLink === "/Contact" ? "active" : ""}`}
          onClick={() => handleSetActiveLink("/Contact")}
        >
          <div className={`m-box m-box--47 ${activeLink === "/Contact" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faPhone} className="fontawesome" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
