import "../styles/Short.scss";
import first from "../assets/design1.jpg";
import second from "../assets/design2.jpg";
import third from "../assets/design3.jpg";

function Short(){
   return(
      <>
            <div className="shortcut">               
         <div className="react">
            <img src={first} alt="noppic"  />
            <h5>Website Design</h5>
         </div>

         <div className="react">
            <img src={third} alt="nopic"  />
            <h5>Mobile Design</h5>
         </div>
         
         <div className="react">
            <img src={second} alt="nopic"  />
            <h5>Product Design</h5>
         </div>
      </div>
</>
   )
}
export default Short;