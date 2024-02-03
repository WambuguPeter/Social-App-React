
import '../styles/Notification.scss'
import avatar1 from '../assets/Avatar-6.png'

const Notification = ({onClose}) => {
        
  return (
    <div className="container">
        <div className='Notification' >
        <div className="head">
            <div><h2>Notification</h2></div>
            <div>
                <button className='closebtn' onClick={onClose} >X</button>
                
            </div>        
        </div>
        <div className="btn">
            <button className='notification' >All Notification</button>
            <button className="unread">Unread</button>
        </div>


        <h4>Today</h4>
        <div className="list">            
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
        </div>

        <h4>Yesterday</h4>
        <div className="list">
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
            <div className="items">
                <img src={avatar1} alt="nopic" />
                <div className='Note' >
                    <h4>Bessie hee</h4>
                    <p>Start following you</p>
                </div>
                <div className="time">
                    <p>08:15pm</p>
                    <input type="radio" name="active" id="1" />
                </div>
            </div>
        </div>

        
    </div>
    </div>
    
  )
}

export default Notification


// import React from 'react'

// const Notification = () => {
//     const notifications = [
//         { id: 1, message: "Notification 1", date: new Date() },
//         { id: 2, message: "Notification 2", date: new Date(new Date().setDate(new Date().getDate() - 1)) }
        
//         ];
//         const formatDate = (date) => {
//             return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
//           };
//   return (<div className="notification-container">
//   <div className="notification-popup">
//     <div className="notification-header">
//       <span className="notification-title">Notifications</span>
   
//       <button className="close-btn">X</button>
//     </div>
  
//     <div className="notification-content">
//       {notifications.map(notification => (
//         <div key={notification.id} className="notification-item">
//           {notification.message} ({formatDate(notification.date)})
//         </div>
//       ))}
//     </div>
   
//     <div className="notification-footer">
//       <button>Show All</button>
//       <button>Show Unread</button>
//     </div>
//   </div>
// </div>
// );
// };
// export default Notification