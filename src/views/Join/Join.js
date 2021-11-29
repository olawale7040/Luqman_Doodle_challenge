import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "src/hooks/useAuth";
import { fetchMessages } from "src/slices/messages";
import { createUser } from "src/slices/user";
import "./Join.css";

const Join = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (name === "") {
      setErrorMessage("Name is required");
    }
    if (name && name.length < 3) {
      setErrorMessage("Name too short");
    }
    if (name.length >= 3) {
      const userName = name.trim();
      dispatch(createUser(userName));
      let userObj = { name: userName };
      localStorage.setItem("chat_app", JSON.stringify(userObj));
    }
  };

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  if (user) {
    return <Navigate to="/chat" replace={true} />;
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h3 className="heading">Join Group Chat</h3>
        <div className="errorMessage">{errorMessage}</div>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
            onInput={() => setErrorMessage("")}
          />
        </div>
        <button onClick={handleLogin} className={"button mt-20"} type="submit">
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Join;
