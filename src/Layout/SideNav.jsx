import "../styles/SideNav.scss";
import Avatar1 from "../assets/Avatar1.jpg";
import Menu from "../Components/Menu";
import Short from "../Components/Short";
function SideNav() {
  return (
    <div className="sidenav">
      {/* side profile */}
      <div className="side-profile">
        <img className="avat" src={Avatar1} alt="nopic" />
        <div className="side-profile-text">
          <h5>Jonathan</h5>
          <h4>@tweet</h4>
        </div>
      </div>
      <div className="sidenav-menu">
        <Menu />
      </div>
      <div className="sidenav-suggestions">
      <h4>SHORTCUTS</h4>
        <Short/> </div>
    </div>
  );
}
export default SideNav;
