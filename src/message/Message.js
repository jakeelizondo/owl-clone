import React from 'react';

function Message(props) {
  if (props.type === 'message') {
    return (
      <div className="chat-message">
        <img className="chat-avatar" src={props.avatar} />
        <p>{props.name}</p>
        <p>{props.time}</p>
        <p>{props.message}</p>
      </div>
    );
  } else if (props.type === 'thumbs-up' || props.type === 'thumbs-down') {
    return (
      <div>
        <p>
          {props.name} gave a {props.type}
        </p>
      </div>
    );
  } else if (props.type === 'raise-hand') {
    return (
      <div>
        <p>{props.name} raised their hand</p>
      </div>
    );
  } else if (props.type === 'clap') {
    return (
      <div>
        <p>{props.name} clapped</p>
      </div>
    );
  } else if (props.type.includes('join')) {
    return (
      <div>
        <p>{props.name} joined the stage</p>
      </div>
    );
  } else if (props.type.includes('leave')) {
    return (
      <div>
        <p>{props.name} left the stage</p>
      </div>
    );
  }
}

export default Message;
