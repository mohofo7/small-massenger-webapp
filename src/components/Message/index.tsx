import React from "react";
import { IMessage } from "src/store/reducer/Contacts";
import "./style.scss";

const Message: React.FC<IMessage> = (props) => {
  const { content, date, self } = props;
  return <div className={`message ${self ? "message_self" : ""}`}>{content}</div>;
};

export default Message;
