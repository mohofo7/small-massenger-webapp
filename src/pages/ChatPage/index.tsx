import React, { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IContact, receiveMessage, sendMessage } from "src/store/reducer/Contacts";
import Message from "src/components/Message";
import Input from "src/components/Input";
import ContactItem from "components/ContactItem";
import Back from "src/assets/images/arrow.svg";
import "./style.scss";

interface IMatch {
  id: string;
}

const ChatPage: React.FC = () => {
  const { id } = useParams<IMatch>();
  const contact = useSelector<{ contacts: Array<IContact> }, IContact>((state) =>
    state.contacts.find((con) => con.id === id)
  );
  const dispatch = useDispatch();
  const sendNewMessage = useCallback(
    (message) => {
      dispatch(
        sendMessage(id, {
          content: message,
          date: new Date(),
          self: true
        })
      );
      setTimeout(() => {
        dispatch(
          receiveMessage(id, {
            content: `${message} back`,
            date: new Date(),
            self: false
          })
        );
      }, 2000);
    },
    [dispatch, id]
  );

  return (
    <div className="chat-page">
      <div className="header">
        <Link to="/" className="d-flex">
          <Back className="contacts__back-btn" />
        </Link>
        <Link to={`/contacts/${id}`}>
          <ContactItem name={contact.name} picture={contact.picture} />
        </Link>
      </div>
      <div className="chat-page__body">
        <div className="chat-page__list">
          {contact.messages.map((message) => (
            <Message
              key={message.date.toString()}
              content={message.content}
              date={message.date}
              self={message.self}
            />
          ))}
        </div>
      </div>
      <Input className="chat-page__input" sendMessage={sendNewMessage} />
    </div>
  );
};

export default ChatPage;
