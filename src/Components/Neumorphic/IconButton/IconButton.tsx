import React, { useState } from "react";
import './IconButton.css'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
const IconButton = (props: any) => {
    const [icon, ] = useState(props.icon || 'home')
    return(
        <button className='neumo icon-button'>
            <span className="material-icons icon">
                {icon}
            </span>
        </button>
    )
}
export default IconButton;