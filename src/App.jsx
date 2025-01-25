import React from "react";
import "./App.css";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import { useColorPicker } from "./hooks/useColorPicker";

function App() {
  const { selectedColor, handleColorChange } = useColorPicker();

  return (
    <div className="app">
      
      <ColorDisplay color={selectedColor} />
      <ColorPicker color={selectedColor} handleColorChange={handleColorChange} />
    </div>
  );
}

export default App;

