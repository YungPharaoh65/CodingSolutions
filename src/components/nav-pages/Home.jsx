import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>About Us</h1>

      <p>
        At <b>Coding Solutions</b>, we're dedicated to making web development
        accessible to everyone.
        <br />
        Through structured classes in{" "}
        <b className="textcolor">
          HTML, CSS, and other web development languages
        </b>
        ,
        <br />
        we empower learners at all levels. We go through practicals so you enjoy
        learning.
        <br />
        <br />
        Our mission is to foster a supportive learning environment where
        creativity meets technology, <br />
        offering hands-on projects and expert guidance. Whether you're a{" "}
        <b>complete beginner</b>
        <br /> or <b> looking to refine your skills </b>,
        <br />
        <br />
        join us to embark on a journey of learning and discovery in web
        development.
        <br />
        <br />- find out how you can join now by clicking here to begin with us- 👉🏽
      </p>
      <br />

      <div className="movebutton">
     <a href="https://yungpharaoh65.github.io/pricing/">   
          <button className="getStartedBtn">find out what we learn</button> 
        </a> 
      </div>
    </div>
  );
};

export default Home;
