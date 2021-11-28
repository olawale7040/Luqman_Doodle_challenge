import "./Message.css";
import { standardDateFormat } from "../../utils/date";

const Message = ({ message, user }) => {
  return (
    <div
      className={
        "messageWrapper " +
        (user === message.author ? "justifyEnd" : "justifyStart")
      }
    >
      <div
        className={
          "messageContainer " + (user === message.author ? "yellowBG" : "")
        }
      >
        {user !== message.author && (
          <div className="messageSender">{message.author}</div>
        )}
        <div className="messageText">{message.message}</div>
        <div
          className={
            "messageDate " + (user === message.author ? "justifyEnd" : "")
          }
        >
          <div>{standardDateFormat(message.timestamp)}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
