import React from "react";
import "./style.scss";

interface IChatItem {
  pic: string;
  name: string;
  lastMessage: string;
}

const ChatItem: React.FC<IChatItem> = (props) => {
  const { pic, name, lastMessage } = props;
  return (
    <div className="chat-item">
      <img className="chat-item__image" src={pic} alt={name} />
      <div className="chat-item__content">
        <div className="chat-item__name">{name}</div>
        <div className="chat-item__caption">{lastMessage}</div>
      </div>
    </div>
  );
};

export default ChatItem;
