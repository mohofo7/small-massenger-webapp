import React, { useState } from "react";
import UserIcon from "src/assets/images/user.svg";
import "./style.scss";

interface IChatItem {
  pic: string;
  name: string;
  caption: string;
  focused: boolean;
}

const ChatItem: React.FC<IChatItem> = (props) => {
  const { pic, name, caption, focused } = props;
  const [iconFallback, setIconFallback] = useState<boolean>(false);
  return (
    <div className={`chat-item ${focused ? "chat-item_focused" : ""}`}>
      {!iconFallback && (
        <img
          className="chat-item__image"
          src={pic}
          alt={name}
          onError={() => setIconFallback(true)}
        />
      )}
      {iconFallback && <UserIcon className="chat-item__image" />}
      <div className="chat-item__content">
        <div className="chat-item__name">{name}</div>
        <div className="chat-item__caption">{caption}</div>
      </div>
    </div>
  );
};

export default ChatItem;
