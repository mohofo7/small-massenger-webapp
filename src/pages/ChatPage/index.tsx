import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Message from "components/Message";
import "./style.scss";
import Input from "components/Input";

// interface IChatPage {}
interface IMatch {
  id: string;
}

const ChatPage: React.FC = () => {
  const { id } = useParams<IMatch>();
  return (
    <Fragment>
      <div className="chat-page__header">{/*<ContactItem />*/}</div>
      <div className="chat-page__list">
        {Array(20)
          .fill(0)
          .map((value, index) => (
            <Message
              key={index}
              content={`Salam ${index}`}
              date={new Date().toString()}
              self={Boolean(index % 2)}
            />
          ))}
      </div>
      <Input className="chat-page__input" />
    </Fragment>
  );
};

export default ChatPage;
