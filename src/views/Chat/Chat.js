import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "src/slices/messages";
import { useAuth } from "src/hooks/useAuth";
// Components
import InfoBar from "src/components/InfoBar/InfoBar";
import InputComponent from "src/components/InputComponent/InputComponent";
import Messages from "src/components/Messages/Messages";

import "./Chat.css";
import bgImage from "src/assets/body-bg.png";

const Chat = () => {
  const { user } = useAuth();
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      let payload = { message, author: user, timestamp: Date.now() };
      dispatch(createMessage(payload));
      setMessage("");
    }
  };

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div
      className="outerContainer"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="innerContainer">
        <InfoBar user={user} />
        <Messages messages={messages} />
        <InputComponent
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
