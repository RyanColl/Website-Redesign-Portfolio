import React from "react";
import NeumoButton from './Button/NeumoButton';
import Toggle from './Toggle/Toggle';
import NeumoSwitch from './Switch/NeumoSwitch';
import SphereSwitch from './SphereSwitch/SphereSwitch';
import NeumoTabs from './Tabs/NeumoTabs';
import SearchBar from './Search/SearchBar';
import TypeBar from './TypeBar/TypeBar';
import IconButton from './IconButton/IconButton'
import NeumoSlider from './Slider/Slider'
import NeumoClock from './Clock/NeumoClock';
import PlayButton from './PlayButton/PlayButton';
const NeumoExample = () => {
    return(
        <>
        <SphereSwitch />
        <SphereSwitch id={2} isChecked={true} />
        <Toggle />
        <Toggle id={2} isChecked={true} />
        <SearchBar />
        <TypeBar /> 
        <NeumoSlider />
        <IconButton />
        <IconButton icon={'supervised_user_circle'}/>
        <IconButton icon={'settings'} />
        <NeumoSwitch />
        <NeumoSwitch id={2} isChecked={true} />
        <NeumoButton />
        <NeumoButton darkThemed={true} />
        <NeumoTabs />
        <NeumoClock />
        <PlayButton />
        </>
    )
}
export default NeumoExample;