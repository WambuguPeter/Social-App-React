import "../styles/Navbar.scss";
import Notification from "../Components/Notification";
import { useState } from "react";
import logo from "../assets/logo.png";
import menu from '../assets/menu-2.png'
import Notify from "../assets/notification.png";
import Avatar1 from '../assets/Avatar1.jpg'
import Chevron from '../assets/chevron-down.png'
import message from '../assets/message.png'
import search from '../assets/search.png'
function Navbar() {
  const [showNotificationForm, setShowNotificationForm] = useState(false);

  const toggleNotificationForm = () => {
    setShowNotificationForm(!showNotificationForm)}
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={menu} alt="nopic" />
        <img src={logo} alt="nopic" />
        <h2>Social-M-APP</h2>
      </div>

      <div className="nav-body">
        <div  className="input1">
          <img src={search} alt="" srcset="" />
          <input type="text" placeholder="search..." />

        </div>

        <div className="nav-body-right">
          <img className="message" src={message} alt="nopic" srcset="" />
          <img onClick={toggleNotificationForm} src={Notify} alt="nopic"/>
          {showNotificationForm && <Notification onClose={toggleNotificationForm}/>}
          <div className="userAvator">
            <img className="avat" src={Avatar1} alt="nopic" />
            <img src={Chevron} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
