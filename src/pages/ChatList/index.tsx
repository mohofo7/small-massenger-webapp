import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { IContact } from "src/store/reducer/Contacts";
import ChatItem from "src/components/ChatItem";
import UserIcon from "src/assets/images/user.svg";
import "./style.scss";

const contactSortByLastMessage = (contact1: IContact, contact2: IContact): number => {
  if (contact1.messages[0].date === contact2.messages[0].date) return 0;
  else if (contact1.messages[0].date < contact2.messages[0].date) return 1;
  else return -1;
};

const ChatList: React.FC = () => {
  const contacts = useSelector<{ contacts: Array<IContact> }, Array<IContact>>((state) =>
    state.contacts.filter((contact) => contact.messages.length > 0)
  );
  const match = useRouteMatch<{ id: string }>("/chats/:id");

  return (
    <div>
      <div className="header">
        <div className="chat-list__title">Small Messenger</div>
        <Link to="/contacts" className="ml-auto d-flex">
          <UserIcon className="chat-list__contact-icon" />
        </Link>
      </div>
      {contacts.sort(contactSortByLastMessage).map((contact) => (
        <Link to={`/chats/${contact.id}`} key={contact.id}>
          <ChatItem
            pic={contact.picture}
            name={contact.name}
            caption={contact.messages[0].content}
            focused={contact.id === match?.params?.id}
          />
        </Link>
      ))}
      {contacts.length <= 0 && (
        <div className="chat-list__empty">Start messaging to your contacts</div>
      )}
    </div>
  );
};

export default ChatList;
