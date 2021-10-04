import React, { useState } from "react";
import './NeumoButton.css';
const colors = {
    lightTheme: {
        backgroundColor: '#396FF9',
        backgroundImage: 'linear-gradient(180deg, #84A9FE 0%, #396FF9 100%)',
        color: 'white'
    },
    darkTheme: {
        backgroundColor: '#E3EBF5',
        backgroundImage: 'linear-gradient(180deg, #E3EBF5 0%, #E3EBF5 100%)',
        color: '#9DABD0'
    }
}
const {lightTheme, darkTheme} = colors;
const NeumoButton = (props: any) => {
    const darkThemed = props.darkThemed || false;
    const [style, setStyle] = useState(darkThemed ? darkTheme : lightTheme)
    return (
        <button 
        onMouseDown={() => {setStyle(darkThemed ? lightTheme : darkTheme)}} 
        onMouseUp={() => setStyle(darkThemed ? darkTheme : lightTheme)}
        className='neumo neumo-button' style={style}>Button</button>
    )
}
export default NeumoButton;


