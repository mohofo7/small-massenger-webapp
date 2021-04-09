import React from "react";
import ChatItem from "components/ChatItem";

// interface IChatList {}

const ChatList: React.FC = () => {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((value, index) => (
          <ChatItem
            key={index}
            pic="https://avatars.githubusercontent.com/u/39581812"
            name="Mohammad"
            lastMessage="hey there !!"
          />
        ))}
    </div>
  );
};

export default ChatList;
