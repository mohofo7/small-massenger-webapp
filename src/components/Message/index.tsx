import React from "react";
import { IMessage } from "src/store/reducer/Contacts";
import "./style.scss";

const Message: React.FC<IMessage> = (props) => {
  const { content, date, self } = props;
  return (
    <div className={`message__wrapper ${self ? "message__wrapper_self" : ""}`}>
      <div className={`message ${self ? "message_self" : ""}`}>{content}</div>
      <div className="message__date">{`${new Date(date).getHours()}:${new Date(
        date
      ).getMinutes()}`}</div>
    </div>
  );
};

export default Message;
