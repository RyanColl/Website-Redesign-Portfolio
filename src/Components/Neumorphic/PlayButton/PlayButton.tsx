import React, { useEffect, useState } from "react";
import './PlayButton.css';

const PlayButton = (props: any) => {
    const [playing, setPlaying] = useState(true)
    return(
        <div className={playing ? "neumo neumo-play circle-inset" : 'neumo neumo-play' }>
            <button 
            onClick={() => setPlaying(playing ? false : true)} 
            className={playing ? "circle__btn circle-inset" : 'circle__btn' }>
                {playing ? <span id='play' className='material-icons'>play_arrow</span>
                         : <span id='pause' className='material-icons'>pause</span>}
            </button>
            <span className={playing ? 'circle__back-1' : 'circle__back-1 paused'}></span>
            <span className={playing ? 'circle__back-2' : 'circle__back-2 paused'}></span>
        </div>
    )
}
export default PlayButton;