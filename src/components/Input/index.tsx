import React from "react";
import Send from "src/assets/images/send.svg";
import "./style.scss";
interface IInput {
  className?: string;
}

const Input: React.FC<IInput> = (props) => {
  const { className = "" } = props;

  return (
    <div className={`input ${className}`.trim()}>
      <div className="input__wrapper">
        <input className="input__field" type="text" />
        <button className="input__send">
          <Send className="input__send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Input;
