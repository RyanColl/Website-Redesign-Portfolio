import React from "react";
import './NeumoSwitch.css';
const NeumoSwitch = (props: any) => {
    const {isChecked} = props;
    return (
        <div className='neumo-switch'>
            <input type="checkbox" name="switch" id="switch" checked={isChecked} />
            {/* @ts-ignore */}
            <label for="switch" className='slider'></label>  
        </div>
    )
}
export default NeumoSwitch;