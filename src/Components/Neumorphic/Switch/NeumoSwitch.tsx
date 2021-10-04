import React, { useState } from "react";
import './NeumoSwitch.css';
const NeumoSwitch = (props: any) => {
    const [isChecked, setChecked] = useState(props.isChecked || false)
    const id = props.id || 1;
    return (
        <div className='neumo-switch'>
            <input 
            type="checkbox" 
            name={`switch-${id}`} 
            id={`switch-${id}`} 
            checked={isChecked} 
            onClick={() => {isChecked ? setChecked(false) : setChecked(true)}} 
            onChange={(e) => {console.log(e.target)}}
            />
            
            <label htmlFor={`switch-${id}`} className={`slider-${id}`} ></label>  
        </div>
    )
}
export default NeumoSwitch;