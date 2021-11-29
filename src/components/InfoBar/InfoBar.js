import { useDispatch } from "react-redux";
import { createUser } from "src/slices/user";
import onlineIcon from "src/assets/icons/onlineIcon.png";
import closeIcon from "src/assets/icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ user }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(createUser(null));
    localStorage.removeItem("chat_app");
  };
  return (
    <div className="infoBar">
      <div className="infoBarContainer">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          <h3>{user}</h3>
        </div>
        <div className="rightInnerContainer">
          <div className="logOut" onClick={handleLogout}>
            <img src={closeIcon} alt="close icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoBar;
