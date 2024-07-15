import React from "react";
import "./Home.css";

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
        <br />- Download the pdf to read on our detailed course we are offering
        - 👉🏽
      </p>
      <br />

      <div className="movebutton">
        <a href="/summary.pdf" download="Real Web dev Guide 2024">
          <button className="getStartedBtn">download pdf...</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
