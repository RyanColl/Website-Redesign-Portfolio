import React, { useState } from "react";
import './NeumoSwitch.css';
const NeumoSwitch = (props: any) => {
    const [isChecked, setChecked] = useState(props.isChecked || false)
    return (
        <div className='neumo-switch'>
            <input 
            type="checkbox" 
            name={`switch-${props.id}`} 
            id={`switch-${props.id}`} 
            checked={isChecked} 
            onClick={() => {isChecked ? setChecked(false) : setChecked(true)}} />
            {/* @ts-ignore */}
            <label for={`switch-${props.id}`} className={`slider-${props.id}`} ></label>  
        </div>
    )
}
export default NeumoSwitch;