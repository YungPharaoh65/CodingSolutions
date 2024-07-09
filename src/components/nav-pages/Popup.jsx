import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import "./Popup.css";
import { storage } from "../nav-pages/firebase/portfoliodata"; // Import Firebase storage

const Popup = ({ show, onClose, addProject }) => {
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    image: null,
    projectLink: "", // Add projectLink to formData
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files.length > 0) {
      setFormData({
        ...formData,
        image: files[0], // Store the file object instead of URL
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      console.error("No image selected.");
      return;
    }

    // Upload image to Firebase Storage
    const imageRef = ref(storage, `images/${formData.image.name}`);
    await uploadBytes(imageRef, formData.image);
    const imageUrl = await getDownloadURL(imageRef);

    const newProject = {
      imgSrc: imageUrl,
      link: formData.projectLink, // Use the projectLink from formData
      alt: formData.projectName,
      icon: faUmbrella, // Change to appropriate icon
      name: formData.projectName,
    };

    try {
      await addProject(newProject); // Save to Firestore and update state
      console.log("Project added successfully!");
      onClose();
      setFormData({
        name: "",
        projectName: "",
        image: null,
        projectLink: "", // Reset projectLink
      });
    } catch (error) {
      console.error("Error adding project: ", error);
    }
  };

  const handleClose = (event) => {
    if (event.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  return (
    <div className={`popup-overlay ${show ? "show" : ""}`} onClick={handleClose}>
      <div className={`popup ${show ? "show" : ""}`}>
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Developer Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="Name"
              placeholder="Enter developer name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="projectName"
              placeholder="Enter project name"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="projectLink">Project URL:</label>
            <input
              type="url"
              id="projectLink"
              name="projectLink"
              className="projectLink"
              placeholder="Enter project URL"
              value={formData.projectLink}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="image">Select Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              className="imageSelect"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
