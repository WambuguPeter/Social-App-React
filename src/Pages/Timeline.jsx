import '../styles/PageStlyles/Timeline.scss'
import MainBottomRight from '../Components/MainBottomRight'
import Avatar1 from '../assets/Avatar1.jpg'
import Avatar2 from '../assets/Avatar5.png'
import Avatar3 from '../assets/Avatar6.png'
import Avatar4 from '../assets/Avatar7.png'
import Avatar5 from '../assets/Avatar -3.png'
import Avatar6 from '../assets/Avatar-4.png'
import Avatar7 from '../assets/Avatar-5.png'
import Avatar8 from '../assets/Avatar-6.png'
import data from '../assets/data.json'
import { useState, useEffect } from 'react'



const Timeline = () => {
  // const [userData, setUserData] = useState(null);
  // const [friendsData, setFriendsData] = useState([]);

  // useEffect(() => {
  //   setUserData(data.user); // Set user data from the imported JSON
  //   setFriendsData(data.friends); // Set friends data from the imported JSON
  // }, []);
  
  return (
    <div className='Timeline-page' >
      <div className="users">
        
        <div className="user">
          <img src={Avatar6} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar3} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar4} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar5} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar6} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar7} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar8} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar2} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar3} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar2} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar3} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar4} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar5} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar6} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar7} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar8} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar2} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar3} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar4} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar5} alt="nopic" />
          <span>Jonaah</span>
        </div>

        <div className="user">
          <img src={Avatar6} alt="nopic" />
          <span>Jonaah</span>
        </div>
        
      </div>

      {/* Timeline */}
     {/* Display user's avatar
     {userData && (
        <div className={`avatar ${userData.posts.length > 0 ? 'has-post' : ''}`} style={{ backgroundImage: `url(${userData.avatar})` }}></div>
      )}

      {/* Display avatars of friends */}
      {/* {friendsData.map((friend) => (
        <div
          key={friend.id}
          className={`avatar ${friend.posts.length > 0 ? 'has-post' : ''}`}
          style={{ backgroundImage: `url(${friend.avatar})` }}
        ></div>
      ))}  */}

    <MainBottomRight />
    </div>
  )
}

export default Timeline