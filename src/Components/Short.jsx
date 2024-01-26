import "../styles/Short.scss";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

function Short(){
   return(
      <>
            <div className="shortcut">

               <h4>SHORTCUTS</h4>
         <div className="react">
            <img src={first} alt="noppic"  />
            <h4>Website Design</h4>
         </div>

         <div className="react">
            <img src={third} alt="nopic"  />
            <h4>Mobile Design</h4>
         </div>
         
         <div className="react">
            <img src={second} alt="nopic"  />
            <h4>Product Design</h4>
         </div>
      </div>
</>
   )
}
export default Short;