import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './chat.css'


export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Group Chat</h1>
        <h2 className="heading">Chat With Your Team!!!</h2>
        <h2>Use Your Group ID As Chat Room ID </h2>
        <div>
          <input placeholder="Student ID" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Chat Room ID" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join</button>
        </Link>
        
      </div>
      <img className="img2" src="/cht.png"/>
     </div>
    
     
  );
}
