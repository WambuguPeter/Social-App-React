import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles//App.scss'
import Major from './Layout/Major'
import Login from './Pages/Login'
function App() {

  return (  
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login />} />
  <Route path="/major" element={<Major />} />
  </Routes>

  <Major />
  </BrowserRouter>
  )
}

export default App
