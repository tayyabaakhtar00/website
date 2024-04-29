import Script from "next/script";
import React, { useEffect } from "react";
import Bannder5 from "./Bannder5";

function Preloader() {
    useEffect(()=>{


  particleground(document.getElementById("particles-foreground"), {
    dotColor: "rgba(6, 137,216, 1)",
    lineColor: "rgba(255, 255, 255, 0.1)",
    minSpeedX: 0.3,
    maxSpeedX: 0.6,
    minSpeedY: 0.3,
    maxSpeedY: 0.6,
    density: 50000, // One particle every n pixels
    curvedLines: false,
    proximity: 250, // How close two dots need to be before they join
    parallaxMultiplier: 10, // Lower the number is more extreme parallax
    particleRadius: 4, // Dot size
  });
  
  particleground(document.getElementById("particles-background"), {
    dotColor: "rgba(6, 137,216, 1)",
    lineColor: "rgba(255, 255, 255, 0.1)",
    minSpeedX: 0.075,
    maxSpeedX: 0.15,
    minSpeedY: 0.075,
    maxSpeedY: 0.15,
    density: 30000, // One particle every n pixels
    curvedLines: false,
    proximity: 20, // How close two dots need to be before they join
    parallaxMultiplier: 20, // Lower the number is more extreme parallax
    particleRadius: 2, // Dot size
  });
  
    })
  return (
    <div className="preloader">
    <div id="particles-background" className="vertical-centered-box" />
    <div id="particles-foreground" className="vertical-centered-box" />
    
    <Bannder5/>
  </div>
  
  );
}

export default Preloader;
