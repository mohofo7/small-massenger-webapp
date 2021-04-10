import React from "react";
import "./style.scss";

interface IChatItem {
  pic: string;
  name: string;
  caption: string;
  focused: boolean;
}

const ChatItem: React.FC<IChatItem> = (props) => {
  const { pic, name, caption, focused } = props;
  return (
    <div className={`chat-item ${focused ? "chat-item_focused" : ""}`}>
      <img className="chat-item__image" src={pic} alt={name} />
      <div className="chat-item__content">
        <div className="chat-item__name">{name}</div>
        <div className="chat-item__caption">{caption}</div>
      </div>
    </div>
  );
};

export default ChatItem;
