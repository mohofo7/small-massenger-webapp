import React from "react";
import "./style.scss";

interface IContactItem {
  picture: string;
  name: string;
}

const ContactItem: React.FC<IContactItem> = (props) => {
  const { picture, name } = props;
  return (
    <div className="contact-item">
      <img className="contact-item__image" src={picture} alt={name} />
      <div className="contact-item__name">{name}</div>
    </div>
  );
};

export default ContactItem;
