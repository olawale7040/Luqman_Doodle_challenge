import { useState, useEffect } from "react";
import InfoBar from "../../components/InfoBar/InfoBar";
import InputComponent from "../../components/InputComponent/InputComponent";
import Messages from "../../components/Messages/Messages";

import "./Chat.css";
import bgImage from "../../assets/body-bg.png";

const Chat = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className="outerContainer"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="innerContainer">
        <InfoBar />
        <Messages />
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
