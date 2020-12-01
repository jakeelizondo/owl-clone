import React from 'react';
import './Participant.css';

function Participant(props) {
  return (
    <div className="participant">
      {!props.invertImage ? (
        <div>
          <img src={props.avatar} />
          <h2>{props.name}</h2>
          <p>{props.onStage ? 'on stage' : null}</p>
        </div>
      ) : (
        <div>
          <h2>{props.name}</h2>
          <img src={props.avatar} />
        </div>
      )}
    </div>
  );
}

export default Participant;
