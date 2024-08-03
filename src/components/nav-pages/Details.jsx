import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUmbrella, faUserPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Popup from "./Popup";
import "./Details.css";

function Details() {
  const initialProjects = [
    {
      imgSrc: "/Evergreen.jpg",
      link: "https://yungpharaoh65.github.io/EverGreen/",
      alt: "Evergreen",
      icon: faGithub,
      name: "Evergreen"
    },
    {
      imgSrc: "/foodFesta.jpg",
      link: "https://yungpharaoh65.github.io/FoodFesta/",
      alt: "Food Festa",
      icon: faGithub,
      name: "Food Festa"
    },
    {
      imgSrc: "/tradingview.jpg",
      link: "https://tradingrexreview.netlify.app/",
      alt: "tradingview",
      icon: faUmbrella,
      name: "tradingview"
    }
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    if (savedProjects) {
      setProjects(savedProjects);
    }
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const addProject = (newProject) => {
    newProject.id = projects.length + 1; // Assign a unique ID
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const deleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div>
      <h1>Our Portfolios</h1>
      <div className="scroll-container">
        {projects.map((project, index) => (
          <div className="box10" key={index}>
            <img src={project.imgSrc} alt={project.alt} className="evergreen" />
            <a href={project.link} className="overlay">
              {project.name} <FontAwesomeIcon className="fontawesomesbrand" icon={project.icon} />
            </a>
            
            {/* Show delete button only for added projects */}
            {index >= initialProjects.length && (
              <button className="delete-button" onClick={() => deleteProject(index)}>
                <FontAwesomeIcon className="fontawesomesbrand" icon={faTrash} />
              </button>
            )}
          </div>
        ))}
        <div className="box12" onClick={togglePopup}>
          <br />
          <p className="AddProjects">
            Add your <br /> own Project <FontAwesomeIcon className="fontawesomesbrand2" icon={faUserPlus} />
          </p>
        </div>
      </div>
      <Popup show={showPopup} onClose={togglePopup} addProject={addProject} />
    </div>
  );
}

export default Details;
