import '../styles/MainBottomLeft.scss'
import map from '../assets/map-pin.png'
import briefcase from '../assets/briefcase.png'
import  calendar from '../assets/calendar.png'
import ink from '../assets/ink.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'

import ProfileCompletion from '../Components/ProfileProgressBar'


const MainBottomLeft = () => {
  return (
    <>
    <div className="left-main-buttom">
            <div className="profile-progress">
            <ProfileCompletion completedItems={4} totalItems={5}/>
            </div>            
          <div className="intro">
            <h4>Intro</h4>
            <span>Am a Senior software developer at Teach2Give</span>            
            <div className="addressDetails">
              <div className='detail'>
              <img src= {map} alt="map" />
              <span>Nyeri Kenya</span>
              </div>
              <div className='detail'>
              <img src= {briefcase} alt="map" />
              <span>The Jitu Ltd</span>
              </div>
              <div className='detail'>
              <img src= {calendar} alt="map" />
              <span>29 Jan, 2024</span>
              </div>
              <div className='detail'>
              <img src= {ink} alt="map" />
              <span>
              <link rel="stylesheet" href="#" />  The Jitu.com</span>
              </div>     
              
            </div>
          </div>
          <div className="photos">
          <div className="headers">
        <h5>Photos</h5>
        <button className='seeAll'>
        <p>See all</p>
        </button> 
        </div>
        <div className="imgs">
        <img src={photo3} alt="photo3" />
        <img src={photo4} alt="photo4" />
        </div>
        
          </div>
          </div>
    </>
  )
}

export default MainBottomLeft