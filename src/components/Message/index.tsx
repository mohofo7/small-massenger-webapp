import React from "react";
import "./style.scss";

interface IMessage {
  content: string;
  date: string;
  self: boolean;
}

const Message: React.FC<IMessage> = (props) => {
  const { content, date, self } = props;
  return <div className={`message ${self ? "message_self" : ""}`}>{content}</div>;
};

export default Message;
