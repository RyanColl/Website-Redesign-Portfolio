import React, {useState, useEffect} from 'react';
import Button from '../Components/Reusable/Button';
import './App.css';
import '../Components/Neumorphic/Neumo.css'
import NeumoButton from '../Components/Neumorphic/Button/NeumoButton';
import Toggle from '../Components/Neumorphic/Toggle/Toggle';
import NeumoSwitch from '../Components/Neumorphic/Switch/NeumoSwitch';
import SphereSwitch from '../Components/Neumorphic/SphereSwitch/SphereSwitch';
import NeumoTabs from '../Components/Neumorphic/Tabs/NeumoTabs';
import SearchBar from '../Components/Neumorphic/Search/SearchBar';
import TypeBar from '../Components/Neumorphic/TypeBar/TypeBar';
import IconButton from '../Components/Neumorphic/IconButton/IconButton'
import NeumoSlider from '../Components/Neumorphic/Slider/Slider'
import NeumoClock from '../Components/Neumorphic/Clock/NeumoClock';
import PlayButton from '../Components/Neumorphic/PlayButton/PlayButton';
const App = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div className="App-header">
        {/* <SphereSwitch />
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
        <NeumoTabs /> */}
        <NeumoClock />
        <PlayButton />
    </div>
  );
}
export default App;


const buttonStyles = {
  backgroundColor: 'red',
  background: `linear-gradient(-45deg, #e0e0e0, #c4c2c2)`,
  boxShadow:  `31px 31px 62px #acacac, -31px -31px 62px #ffffff`       
}
