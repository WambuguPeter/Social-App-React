import "../styles/Menu.scss";
import EVENTS from "../assets/EVENTS.png";
import FRIENDS from "../assets/FRIENDS.png";
import GROUPS from "../assets/GROUPS.png";
import PHOTOS from "../assets/PHOTOS.png";
import TIMELINE from "../assets/TIMELINE.png";
import VIDEOS from "../assets/VIDEOS.png";
function Menu() {
  const Menu = [
    {
      title: "Timeline",
      icon: TIMELINE,
    },
    {
      title: "Friends",
      icon: FRIENDS,
    },
    {
      title: "Groups",
      icon: GROUPS,
    },

    {
      title: "Videos",
      icon: VIDEOS,
    },
    {
      title: "Photos",
      icon: PHOTOS,
    },
    {
      title: "Events",
      icon: EVENTS,
      value: 10,
    },
  ];
  return (
    <div className="Menu">
      <h4>MENU</h4>
      {Menu &&
        Menu.map((item, index) => {
          return (
            <div className="menu" key={index}>
              <div className="menu-left">
                <img src={item.icon} alt="" srcset="" />
                {item.title}
                <span style={{ backgroundColor: item.value ? '#yourBackgroundColor' : 'transparent' }}>
                  {item.value}
                  </span>

              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Menu;
