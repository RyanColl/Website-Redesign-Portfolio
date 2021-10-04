import React, { useState } from "react";
import './Toggle.css'
const Toggle = (props: any) => {
    const id = props.id || 1;
    const [isChecked, setChecked] = useState(props.isChecked || false);
    const [color, setColor] = useState('#9BAACF')
    return (
        <div 
        className={`neumo toggle-${id}`}
        onMouseOver={() => {setColor('#396FF9')}}
        onMouseOut={() => {setColor('#9BAACF')}}
        >
            <input 
            id={`toggle-${id}`} 
            type="checkbox" 
            checked={isChecked} 
            onClick={() => {isChecked ? setChecked(false) : setChecked(true)}} 
            onChange={(e) => {console.log(e.target)}}
            />
            <label className={`toggle-label-${id}`} htmlFor={`toggle-${id}`}>
            <i id={`icon-${id}`} 
            className="material-icons" 
            style={isChecked ? {color: '#396FF9'} : {color}}
            
            >done</i></label>
        </div>
    )
}
export default Toggle;