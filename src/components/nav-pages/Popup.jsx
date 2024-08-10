import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../nav-pages/firebase/firebase.js"; // Updated import path
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { ClipLoader } from "react-spinners";
import "./Popup.css";

const Popup = ({ show, onClose, addProject }) => {
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    image: null,
    projectLink: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files.length > 0) {
      setFormData({
        ...formData,
        image: files[0],
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
    setLoading(true);

    if (!formData.image) {
      console.error("No image selected.");
      setLoading(false);
      return;
    }

    try {
      const imageRef = ref(storage, `images/${formData.image.name}`);
      await uploadBytes(imageRef, formData.image);
      const imageUrl = await getDownloadURL(imageRef);

      const newProject = {
        imgSrc: imageUrl,
        link: formData.projectLink,
        alt: formData.projectName,
        icon: faUmbrella,
        name: formData.projectName,
      };

      await addDoc(collection(db, "Projects"), newProject);
      addProject(newProject); // Update parent component

      setTimeout(() => {
        setLoading(false);
        onClose();
        setFormData({
          name: "",
          projectName: "",
          image: null,
          projectLink: "",
        });
      }, 1000);
    } catch (error) {
      console.error("Error adding project: ", error);
      setLoading(false);
    }
  };

  const handleClose = (event) => {
    if (event.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`popup-overlay ${show ? "show" : ""}`}
      onClick={handleClose}
    >
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
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" disabled={loading}>
              {loading ? <ClipLoader size={20} color={"#fff"} /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
