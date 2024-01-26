import "../styles/SideNav.scss";
import Avatar from "../assets/Avatar.png";
import Menu from "../Components/Menu";
import Short from "../Components/Short";
function SideNav() {
  return (
    <div className="sidenav">
      {/* side profile */}
      <div className="side-profile">
        <img src={Avatar} alt="nopic" />
        <div className="side-profile-text">
          <h5>Angela Lee</h5>
          <h4>@tweet</h4>
        </div>
      </div>
      <div className="sidenav-menu">
        <Menu />
      </div>
      <div className="sidenav-suggestions">
        
        <Short/> </div>
    </div>
  );
}
export default SideNav;
