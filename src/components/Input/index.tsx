import React, { useCallback, useEffect, useRef, useState } from "react";
import Send from "src/assets/images/send.svg";
import "./style.scss";

interface IInput {
  className?: string;
  sendMessage?: (message) => void;
}

const Input: React.FC<IInput> = (props) => {
  const { className = "", sendMessage } = props;

  const [value, setValue] = useState<string>("");
  const input = useRef<HTMLInputElement>();

  const onEnter = useCallback(
    (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        sendMessage && sendMessage(input.current.value);
        setValue("");
      }
    },
    [sendMessage]
  );

  useEffect(() => {
    input.current.addEventListener("keyup", onEnter);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage && sendMessage(value);
    setValue("");
  };

  return (
    <div className={`input ${className}`.trim()}>
      <div className="input__wrapper">
        <input
          className="input__field"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={input}
        />
        <button className="input__send" onClick={onSubmit}>
          <Send className="input__send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Input;
