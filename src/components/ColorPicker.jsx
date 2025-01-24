

import react, {useState} from 'react';
import { SketchPicker } from 'react-color';
import"./ColorPicker.css";



function ColorPicker(){
    const [selectcolor, setSelectColor] = useState("#48fea9");

    function handleColorChange(color){
        setSelectColor(color.hex);
    }



    return(
   
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display'>
            style={{ backgroundColor: selectedColor }}
            <p>Select Color: {selectcolor}</p>            
        </div>
        <div className='color-picker'>
            <p>Select a Color:</p>
            <SketchPicker 
            color={setSelectColor}
            onChangeComplete={handleColorChange}
            />     

        </div>
    </div>    
    );
}

export default ColorPicker;




    
   
   