import React from "react";
import './TypeBar.css'
const TypeBar = () => {
    return (
        <div className='neumo neumo-typebar'>
            <input 
            type="text" 
            className="typebar__input" 
            placeholder="Type Something..." 
            />  
        </div>
    )
}
export default TypeBar;