import React from "react";
import NeumoButton from "../Components/Neumorphic/Button/NeumoButton";
import NeumoClock from "../Components/Neumorphic/Clock/NeumoClock";
import IconButton from "../Components/Neumorphic/IconButton/IconButton";
import PlayButton from "../Components/Neumorphic/PlayButton/PlayButton";
import SearchBar from "../Components/Neumorphic/Search/SearchBar";
import NeumoSlider from "../Components/Neumorphic/Slider/Slider";
import SphereSwitch from "../Components/Neumorphic/SphereSwitch/SphereSwitch";
import NeumoSwitch from "../Components/Neumorphic/Switch/NeumoSwitch";
import NeumoTabs from "../Components/Neumorphic/Tabs/NeumoTabs";
import Toggle from "../Components/Neumorphic/Toggle/Toggle";
import TypeBar from "../Components/Neumorphic/TypeBar/TypeBar";
import './NeumoBoard.css';

const NeumoBoard = () => {
    return (
        <div className='neumo neumo-board'>
            <div className='inner-board'>
                <div className='neumo-board-switches neumo-display'>
                    <NeumoSwitch />
                    <NeumoSwitch id={2} isChecked={true} />
                </div>
                <div className='neumo-board-checkboxes neumo-display'>
                    <Toggle />
                    <Toggle id={2} isChecked={true} />
                </div>
                <div className='neumo-board-spheres neumo-display'>
                    <SphereSwitch />
                    <SphereSwitch id={2} isChecked={true} />
                </div>
                <div className='neumo-board-button'>
                    <NeumoButton />
                </div>
                <div className='neumo-board-button-dark'>
                    <NeumoButton darkThemed={true} />
                </div>
                <div className='neumo-board-clock'>
                    <NeumoClock />
                </div>
                <div className='neumo-board-play-button'>
                    <PlayButton />
                </div>
                <div className='neumo-board-tabs'>
                    <NeumoTabs />
                </div>
                <div className='neumo-board-icon-buttons neumo-display'>
                    <IconButton />
                    <IconButton icon={'supervised_user_circle'}/>
                    <IconButton icon={'settings'} />
                </div>
                <div className='neumo-board-search'>
                    <SearchBar />
                </div>
                <div className='neumo-board-typebar'>
                    <TypeBar />
                </div>
                <div className='neumo-board-slider'>
                    <NeumoSlider />
                </div>
            </div>
        </div>
    )
}
export default NeumoBoard;