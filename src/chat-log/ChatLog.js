import React from 'react';
import Message from '../message/Message.js';
import renderer from 'react-test-renderer';

function ChatLog(props) {
  let testDate = new Date(1548852724247);
  console.log(testDate.getHours());
  console.log(testDate.getMinutes());

  let messagesArray = props.chatEvents.map((chat) => {
    // isolate username
    let chatUser = Object.assign(
      props.participants.filter((person) => person.id === chat.participantId)
    );
    let chatUserName = chatUser[0].name;
    let chatAvatar = chatUser[0].avatar;

    // take timestamp, get hours and minutes, concatenate into string of time
    let chatDate = new Date(chat.timestamp);
    let chatHour = chatDate.getHours();
    let chatMinutes = chatDate.getMinutes();
    let chatTime = `${chatHour}:${chatMinutes}`;
    console.log(chatTime);

    return (
      <Message
        key={chat.id}
        name={chatUserName}
        time={chatTime}
        type={chat.type}
        message={chat.message ? chat.message : null}
        avatar={chatAvatar}
      />
    );
  });

  // console.log(messagesArray);
  return <div className="messages-list">{messagesArray}</div>;
}

export default ChatLog;
