import React, { useState } from "react";
import './Slider.css'
import { Slider } from "@mui/material";
const NeumoSlider = () => {
    return(
        <div className='neumo neumo-slider'>
            <Slider valueLabelDisplay={'auto'} min={1} max={100} sx={{width: 324, height: 10}} />
        </div>
    )
}
export default NeumoSlider;