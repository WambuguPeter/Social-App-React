import '../styles/SideProfile.scss'
import Avatar1 from '../assets/Avatar1.jpg'

const SideProfile = () => {
  return (
    <div>
        <div className="side-profile">
         <img className="avat" src={Avatar1} alt="nopic" />
        <div className="side-profile-text">
           <h3>Jonathan</h3>
           <p>@tweet</p>
           <h4></h4>
         </div>
       </div>
    </div>
  )
}

export default SideProfile