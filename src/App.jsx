
import './styles//App.scss'

import Navbar from './Layout/Navbar'
import SideNav from './Layout/SideNav'
import MainContent from './Layout/MainContent'
function App() {

  return (
  <>
  <div className="main">
    <div className="navbar">
      {/* {/*navbar*} */}
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
 

  </>
  )
}

export default App
