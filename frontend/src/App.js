import './App.css';
import {useEffect} from 'react';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';

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
    <Header />
      <button onClick={handleClick}>Hit</button>
    </div>
  );
}

export default App;
