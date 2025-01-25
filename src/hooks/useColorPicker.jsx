
import { useState } from 'react';

export function useColorPicker(initialColor = "#48f2fe"){
    
    const [selectedColor, setselectedColor] = useState(initialColor);

    function handleColorChange(color){
        setselectedColor(color);
    }

    return {
        selectedColor,
        handleColorChange,
    };
}