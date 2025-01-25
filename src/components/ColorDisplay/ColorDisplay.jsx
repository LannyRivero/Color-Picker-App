
import React from "react";
import "./ColorDisplay.css";

function ColorDisplay({ color }) {
  return (
    <div className="color-display" style={{ backgroundColor: color }}>
      <p>Selected Color: {color}</p>
     
    </div>
  );
}

export default ColorDisplay;





