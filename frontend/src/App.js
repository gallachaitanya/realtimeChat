import {useEffect, useState} from 'react';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

function App() {
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    connect((msg)=>{
      console.log("New message")
      setMessages([...messages,msg])
    });
  },[messages]);

  const send = (event) => {
    if (event.keyCode === 13){
      sendMsg(event.target.value)
      event.target.value = ""
    }
  }

  return (
    <div className="App">
    <Header />
    <ChatHistory messages={messages} />
    <ChatInput send={send} />
    </div>
  );
}

export default App;
