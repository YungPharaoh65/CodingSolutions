import React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import App from "./App"; 
import Contact from "./components/nav-pages/Contact";
import Details from "./components/nav-pages/Details";
import About from "./components/nav-pages/About";
import Home from "./components/nav-pages/Home";
 
const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes> 
        <Route path="/" element={<Home />} /> {/* This link is the homepage bcos it's the first one you will see */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Contact" element={<Contact />} /> 
         </Routes>
    </HashRouter>
  );
};


export default React.memo(RouteSwitch);