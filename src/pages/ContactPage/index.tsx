import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, IContact } from "src/store/reducer/Contacts";
import Back from "src/assets/images/arrow.svg";
import TrashIcon from "src/assets/images/trash.svg";
import "./style.scss";

const ContactPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contact = useSelector<{ contacts: Array<IContact> }, IContact>((state) =>
    state.contacts.find((con) => con.id === id)
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const removeContact = () => {
    dispatch(deleteContact(id));
    history.push("/contacts");
  };

  if (!contact) return <div>Contact Not found</div>;
  return (
    <div>
      <div className="header">
        <Link to="/contacts" className="d-flex">
          <Back className="contacts__back-btn" />
        </Link>
        <div className="ml-auto" onClick={removeContact}>
          <TrashIcon className="contacts__add-btn" />
        </div>
      </div>
      <div className="contact-page__content">
        <img src={contact.picture} alt={contact.name} />
        <div className="contact-page__name">{contact.name}</div>
        <Link to={`/chats/${id}`} className="contact-page__message-btn">
          <div>Message</div>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
