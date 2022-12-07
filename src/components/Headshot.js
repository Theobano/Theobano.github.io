import React from "react";
import headshot from "../assets/images/mypicture.jpg";
import "../assets/styles/components/Headshot.css";

// Create headshot component
function Headshot(props) {
  return (
    <div>
      <img
        className="circle theme-border-all"
        src={headshot}
        height={props.radius * 2}
        width={props.radius * 2}
        alt="Adedotun"
      />
    </div>
  );
}
export default Headshot;
