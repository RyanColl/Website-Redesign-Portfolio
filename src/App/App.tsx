import React, {useState, useEffect} from 'react';
import './App.css';
const App = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  return (
    <div className="App-header">
        
    </div>
  );
}
export default App;
