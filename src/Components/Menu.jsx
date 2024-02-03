import "../styles/Menu.scss";
import EVENTS from "../assets/EVENTS.png";
import FRIENDS from "../assets/FRIENDS.png";
import GROUPS from "../assets/GROUPS.png";
import PHOTOS from "../assets/PHOTOS.png";
import TIMELINE from "../assets/TIMELINE.png";
import VIDEOS from "../assets/VIDEOS.png";
import { NavLink } from "react-router-dom";
function Menu() {
  const Menu = [
    {
      title: "Home",
      icon: TIMELINE,
      path: "/"
    },
    {
      title: "Timeline",
      icon: TIMELINE,
      path: "/timelines"
    },
    {
      title: "Friends",
      icon: FRIENDS,
      path: "/friends"
    },
    {
      title: "Groups",
      icon: GROUPS,
      path: "/groups"
    },

    {
      title: "Videos",
      icon: VIDEOS,
      path: "/videos"
    },
    {
      title: "Photos",
      icon: PHOTOS,
      path: "/photos"
    },
    {
      title: "Events",
      icon: EVENTS,
      value: 10,
      path: "/events"
    },
  ];
  return (
    <>
    <h4>MENU</h4>
    <div className="Menu">
      {Menu &&
        Menu.map((item, index) => {
          return (
            <div className="menu">
              <NavLink
              key={index}
              to={item.path}
              className='menuIcons'
              activeClassName="active">
              <div className="menu-left">
                <img src={item.icon} alt="" srcset="" />
                {item.title}
                <span style={{ backgroundColor: item.value ? ' rgb(230, 57, 137)' : 'transparent' }}>
                  {item.value}
                  </span>

              </div>
              </NavLink>
            </div>
          );
        })}
    </div>
  </>
  );
}
export default Menu;
