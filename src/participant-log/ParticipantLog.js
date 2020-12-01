import React from 'react';
import Participant from '../participant/Participant.js';

function ParticipantLog(props) {
  let participantsSorted = props.participants.sort(function (a, b) {
    return b.onStage - a.onStage;
  });

  let participantComps = participantsSorted.map((participant) => {
    return (
      <Participant
        key={participant.id}
        avatar={participant.avatar}
        id={participant.id}
        inSession={participant.inSession}
        name={participant.name}
        onStage={participant.onStage}
      />
    );
  });

  console.log(participantComps);

  return <div>{participantComps}</div>;
}

export default ParticipantLog;
