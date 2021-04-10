import React from "react";
import "./style.scss";

interface IContactItem {
  picture: string;
  name: string;
  focused?: boolean;
}

const ContactItem: React.FC<IContactItem> = (props) => {
  const { picture, name, focused } = props;
  return (
    <div className={`contact-item ${focused ? "contact-item_focused" : ""}`}>
      <img className="contact-item__image" src={picture} alt={name} />
      <div className="contact-item__name">{name}</div>
    </div>
  );
};

export default ContactItem;
