import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { IContact } from "src/store/reducer/Contacts";
import ContactItem from "src/components/ContactItem";
import Back from "src/assets/images/arrow.svg";
import AddIcon from "src/assets/images/plus.svg";
import "./style.scss";

const Contacts: React.FC = () => {
  const contacts = useSelector<{ contacts: Array<IContact> }, Array<IContact>>(
    (state) => state.contacts
  );
  const match = useRouteMatch<{ id: string }>("/contacts/:id");

  return (
    <div className="contacts">
      <div className="header">
        <Link to="/" className="d-flex">
          <Back className="contacts__back-btn" />
        </Link>
        <div className="contacts__title">Contacts</div>
        <Link to="/contacts/add" className="d-flex ml-auto">
          <AddIcon className="contacts__add-btn" />
        </Link>
      </div>
      <div className="contacts__list">
        {contacts && contacts.length ? (
          contacts.map((contact) => (
            <Link to={`/contacts/${contact.id}`} key={contact.id}>
              <ContactItem
                picture={contact.picture}
                name={contact.name}
                focused={contact.id === match?.params?.id}
              />
            </Link>
          ))
        ) : (
          <div className="contacts__empty">
            There is no contact here,
            <br /> you can add!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
