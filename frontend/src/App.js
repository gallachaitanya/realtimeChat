import './App.css';
import {useEffect} from 'react';
import { connect, sendMsg } from './api';

function App() {

  useEffect(()=>{
    connect();
  },[]);

  const handleClick = () => {
    console.log("hello");
    sendMsg("hello!");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Hit</button>
    </div>
  );
}

export default App;
