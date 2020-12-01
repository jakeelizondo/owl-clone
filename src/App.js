import React from 'react';
import ChatLog from './chat-log/ChatLog.js';
import ParticipantLog from './participant-log/ParticipantLog.js';
import Stage from './stage/Stage.js';
import './App.css';
import participants from './participants';
import chatEvents from './chatEvents';

function App() {
  return (
    <main className="main-window">
      <div className="chatlog">
        <ChatLog chatEvents={chatEvents} participants={participants} />
      </div>
      <div className="participation-log">
        <ParticipantLog participants={participants} />
      </div>
      <div className="stage">
        <Stage participants={participants} />
      </div>
    </main>
  );
}

export default App;
