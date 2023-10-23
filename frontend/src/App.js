import {useEffect, useState} from 'react';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

function App() {
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    connect((msg)=>{
      console.log("New message")
      setMessages([...messages,msg])
    });
  },[messages]);

  const handleClick = () => {
    console.log("hello");
    sendMsg("hello!");
  }

  return (
    <div className="App">
    <Header />
    <ChatHistory messages={messages} />
      <button onClick={handleClick} className='border-2 bg-blue-600 rounded-md text-white px-4 py-2 m-4'>Hit</button>
    </div>
  );
}

export default App;
