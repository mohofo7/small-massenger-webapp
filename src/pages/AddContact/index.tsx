import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "src/store/reducer/Contacts";
import Back from "src/assets/images/arrow.svg";
import CheckIcon from "src/assets/images/check.svg";
import UserIcon from "src/assets/images/user.svg";
import "./style.scss";

const AddContact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      dispatch(
        addContact({
          name,
          picture: file,
          id: `${Date.now()}`,
          messages: []
        })
      );
      history.push("/contacts");
    } else alert("Please insert name for your contact!");
  };
  return (
    <div className="add-contact">
      <div className="header">
        <Link to="/contacts" className="d-flex">
          <Back className="contacts__back-btn" />
        </Link>
        <div className="contacts__title">Add new Contact</div>
        <div className="d-flex ml-auto" onClick={onSubmit}>
          <CheckIcon className="contacts__add-btn" />
        </div>
      </div>
      <div className="add-contact__input-wrapper">
        {!Boolean(file.length) && (
          <UserIcon className="add-contact__icon add-contact__icon_default" />
        )}
        {Boolean(file.length) && (
          <img src={file} alt="User Picture" className="add-contact__icon" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
          className="add-contact__file-input"
        />
        <input
          className="add-contact__name-input"
          placeholder="Name (required)"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    </div>
  );
};

export default AddContact;
