import '../styles/Rightbar.scss'
import Avatar from "../assets/Avatar.png";
import design1 from '../assets/design1.jpg'
import design2 from '../assets/design2.jpg'
import design3 from '../assets/design3.jpg'
import Avatar5 from '../assets/Avatar5.png'
import Avatar6 from '../assets/Avatar6.png'
import Avatar7 from '../assets/Avatar7.png'
import wd from '../assets/WD.png'
import uo from '../assets/UO.png'
import de from '../assets/DE.png'
const Rightbar = () => {
  return (
   <>
   <div className="rightnav">
      <div className="your-part">
        <div className="headers">
        <h5>YOUR PART</h5>
        <button className='seeAll'>
        <p>See all</p>
        </button>
        </div> 

        <div className="side-profile">        
        <img src={design1} alt="nopic" />
        <div className="side-profile-text">
          <h5>Website Design</h5>          
        </div>
      </div>
      <div className="side-profile">        
        <img src={design2} alt="nopic" />
        <div className="side-profile-text">
          <h5>Mobile Design</h5>          
        </div>
      </div>
      <div className="side-profile">        
        <img src={design3} alt="nopic" />
        <div className="side-profile-text">
          <h5>Product Design</h5>          
        </div>
      </div> 
        
      </div>
      <div className="headers">
        <h5>CONTACT</h5>
        <button className='seeAll'>
        <p>See all</p>
        </button>
             
        </div>     
      <div className="side-profile">        
        <img src={Avatar7} alt="nopic" />
        <div className="side-profile-text">
          <h5>James Njau</h5>          
        </div>
      </div> 

      <div className="side-profile">        
        <img src={Avatar6} alt="nopic" />
        <div className="side-profile-text">
          <h5>Brian Kerio</h5>          
        </div>
      </div> 

      <div className="side-profile">        
        <img src={Avatar5} alt="nopic" />
        <div className="side-profile-text">
          <h5>Penny wachira</h5>          
        </div>
      </div>
      <div className="headers">
        <h5>YOUR PART</h5>
        <button className='seeAll'>
        <p>See all</p>
        </button>
        </div>
      <div className="side-profile">        
        <img src={de} alt="nopic" />
        <div className="side-profile-text">
          <h5>Design Ethus</h5>          
        </div>
      </div>
      <div className="side-profile">        
        <img src={uo} alt="nopic" />
        <div className="side-profile-text">
          <h5>UI Official</h5>          
        </div>
      </div>
      <div className="side-profile">        
        <img src={wd} alt="nopic" />
        <div className="side-profile-text">
          <h5>Web Designer</h5>          
        </div>
      </div> 
    </div>
   
    </>
  )
}

export default Rightbar