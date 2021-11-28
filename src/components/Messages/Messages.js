import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { useAuth } from "../../hooks/useAuth";
import Message from "../Message/Message";
import "./Messages.css";

const Messages = ({ messages }) => {
  const { user } = useAuth();
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <Message key={i} message={message} user={user} />
      ))}
    </ScrollToBottom>
  );
};
export default Messages;
