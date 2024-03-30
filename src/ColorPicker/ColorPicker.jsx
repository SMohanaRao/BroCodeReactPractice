import React, {useState} from 'react';
import "./ColorPicker.css";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className='color-picker-container'>
            <h1 className='color-picker-title'>Color Picker</h1>
            <p className='color-selected'>Selected Color: {color}</p>
            <div className='color-display' style={{backgroundColor: color}}/>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker;