import React, {useState, useEffect} from 'react';
import Button from '../Components/Reusable/Button';
import './App.css';
import '../Components/Neumorphic/Neumo.css'
import NeumoExample from '../Components/Neumorphic/NeumoExample';
import NeumoBoard from '../NeumoBoard/NeumoBoard';
import NeumorphicComponents from '../Pages/NeumorphicComponents/NeumorphicComponents';

const App = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div className="App-header">
        <NeumorphicComponents />
    </div>
  );
}
export default App;


const buttonStyles = {
  backgroundColor: 'red',
  background: `linear-gradient(-45deg, #e0e0e0, #c4c2c2)`,
  boxShadow:  `31px 31px 62px #acacac, -31px -31px 62px #ffffff`       
}
