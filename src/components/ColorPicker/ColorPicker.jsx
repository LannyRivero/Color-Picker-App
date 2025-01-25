import React from "react";
import { HexColorPicker } from "react-colorful";
import "./ColorPicker.css";

function ColorPicker({ color, handleColorChange }) {
  return (
    <div className="picker-container">
      <h1>Color Picker App</h1>
      <label>Select a Color:</label>
      <HexColorPicker 
      color={color} 
      onChange={handleColorChange} 
      />
      
    </div>
  );
}

export default ColorPicker;





  