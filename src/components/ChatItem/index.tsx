import React from "react";
import "./style.scss";

interface IChatItem {
  pic: string;
  name: string;
  caption: string;
}

const ChatItem: React.FC<IChatItem> = (props) => {
  const { pic, name, caption } = props;
  return (
    <div className="chat-item">
      <img className="chat-item__image" src={pic} alt={name} />
      <div className="chat-item__content">
        <div className="chat-item__name">{name}</div>
        <div className="chat-item__caption">{caption}</div>
      </div>
    </div>
  );
};

export default ChatItem;
