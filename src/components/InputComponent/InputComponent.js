import "./InputComponent.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <div className="inputContainer">
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Message"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  </div>
);

export default Input;
