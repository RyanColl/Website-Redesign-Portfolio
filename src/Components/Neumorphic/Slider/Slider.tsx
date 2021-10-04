import React from "react";
import './Slider.css'
import { Slider } from "@mui/material";
const NeumoSlider = () => {
    return(
        <div className='neumo neumo-slider'>
            <Slider sx={{width: 324, height: 10}} />
        </div>
    )
}
export default NeumoSlider;