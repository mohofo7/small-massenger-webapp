import React, { useState } from "react";
import UserIcon from "src/assets/images/user.svg";
import "./style.scss";

interface IContactItem {
  picture: string;
  name: string;
  focused?: boolean;
}

const ContactItem: React.FC<IContactItem> = (props) => {
  const { picture, name, focused } = props;
  const [iconFallback, setIconFallback] = useState<boolean>(false);
  return (
    <div className={`contact-item ${focused ? "contact-item_focused" : ""}`}>
      {!iconFallback && (
        <img
          className="contact-item__image"
          src={picture}
          alt={name}
          onError={() => setIconFallback(true)}
        />
      )}
      {iconFallback && <UserIcon className="contact-item__image" />}
      <div className="contact-item__name">{name}</div>
    </div>
  );
};

export default ContactItem;
