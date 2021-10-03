import React, { useState } from "react";
import './Toggle.css'
const Toggle = (props: any) => {
    const id = props.id || 1;
    const [isChecked, setChecked] = useState(props.isChecked || false);
    return (
        <div className={`neumo toggle-${id}`}>
            <input 
            id={`toggle-${id}`} 
            type="checkbox" 
            checked={isChecked} 
            onClick={() => {isChecked ? setChecked(false) : setChecked(true)}} />
            {/*@ts-ignore */}
            <label className={`toggle-label-${id}`} for={`toggle-${id}`}>
            <i id={`icon-${id}`} className="material-icons" style={isChecked ? {color: '#396FF9'} : {color: '#9BAACF'}}>done</i></label>
        </div>
    )
}
export default Toggle;