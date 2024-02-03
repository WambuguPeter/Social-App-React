import '../styles/Major.scss'
import Navbar from '../Layout/Navbar'
import SideNav from '../Layout/SideNav'
import MainContent from '../Layout/MainContent'

const Major = () => {
  return (    
  <div className="main">
    <div className="navbar">      
      <Navbar/>
    </div>
    <div className="maincontent">
      <div className="sidenav">
        <SideNav/>
      </div>
      <div className="content">        
        <MainContent/>
      </div>
    </div>  
  </div>  
  )
}

export default Major