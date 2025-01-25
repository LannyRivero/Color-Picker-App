import React, { useState } from 'react';
import './ColorPicker.css';



function ColorPicker(){

  const [color, setColor] = useState("#48fea9");

 function handelChangeColor(event){
   setColor(event.target.value);  
  }

  return(    
    <div className='picker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' 
        style={{backgroundColor: color}}>
        <p>Selected Color:{color}</p>
      </div>
      <label> Select a Color</label>
      <input type='color' value={color} onChange={handelChangeColor}></input>
    </div>   
  )

}
export default ColorPicker;



