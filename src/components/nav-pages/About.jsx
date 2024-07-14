import React from "react";
import "./About.css";
 
function About() {
  return (
     <>
     <h1>what we offer:</h1> 

     <div className="webdev1"><br /><p2>30 Days of Basics </p2>
     <p>we offer the ulitimate guide to start <br />
     your web dev journey. <br />From learning HTML/CSS... <br /><br />
     To learning how to create <br />
     your own static website </p>  



     </div>


     <div className="webdev2"><br /><p2>90 Days of Code </p2>
     <p>find out which programming <br />
     language we are learning <br /><br />
     further explore the <br />
     lengths of functionality </p> 
     </div>

     <div className="workbuttons"><p className="textbutton">work skills</p>
     <p className="textbutton">JavaScript</p> <p className="textbutton2">Github</p>
     <p className="textbutton">netlify</p> <p className="textbutton2">php</p>
     <p className="textbutton">Angular</p> <p className="textbutton2">React</p> 
     </div>
      

     </>
  );
}

export default About;