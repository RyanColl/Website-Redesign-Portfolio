import React, {useState, useEffect} from 'react';
import Button from '../Components/Reusable/Button';
import './App.css';
import '../Components/Neumorphic/Neumo.css'
import NeumoButton from '../Components/Neumorphic/Button/NeumoButton';
import NeumoButtonDark from '../Components/Neumorphic/Button/NeumoButtonDark';
import Toggle from '../Components/Neumorphic/Toggle/Toggle';
import NeumoSwitch from '../Components/Neumorphic/Switch/NeumoSwitch';
import SphereSwitch from '../Components/Neumorphic/SphereSwitch/SphereSwitch';
const App = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div className="App-header">
        <SphereSwitch />
        <SphereSwitch id={2} isChecked={true} />
    </div>
  );
}
export default App;


const buttonStyles = {
  backgroundColor: 'red',
  background: `linear-gradient(-45deg, #e0e0e0, #c4c2c2)`,
  boxShadow:  `31px 31px 62px #acacac, -31px -31px 62px #ffffff`       
}
