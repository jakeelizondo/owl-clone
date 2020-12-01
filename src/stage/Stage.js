import React from 'react';
import Participant from '../participant/Participant.js';
import './Stage.css';

function Stage(props) {
  let participantsFiltered = props.participants.filter(
    (person) => person.onStage === true
  );

  let participantComps = participantsFiltered.map((participant) => {
    return (
      <Participant
        key={participant.id}
        avatar={participant.avatar}
        id={participant.id}
        inSession={participant.inSession}
        name={participant.name}
        invertImage={true}
      />
    );
  });

  console.log(participantComps);

  return <div className="on-stage-person">{participantComps}</div>;
}

export default Stage;
