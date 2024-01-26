import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import Notification from "../assets/notification.png";
import Avatar from '../assets/Avatar.png'
import Chevron from '../assets/chevron-down.png'
import message from '../assets/message.png'
import search from '../assets/search.png'
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nopic" />
        <h2>Social-M-APP</h2>
      </div>

      <div className="nav-body">
        <div  className="input">
          <img src={search} alt="" srcset="" />
          <input type="text" placeholder="search..." />

        </div>

        <div className="nav-body-right">
          <img className="message" src={message} alt="nopic" srcset="" />
          <img src={Notification} alt="nopic"/>
          <div className="userAvator">
            <img src={Avatar} alt="nopic" />
            <img src={Chevron} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
