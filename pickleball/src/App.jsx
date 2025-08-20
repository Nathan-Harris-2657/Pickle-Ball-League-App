import { Route, Routes } from 'react-router-dom'
import './App.css'

// Components
import NavBar1 from '../components/NavBar'
import NavBar2 from '../components/NavBar2'

// Pages
import Leagues from '../pages/leagues'
import AboutPickleBall from '../pages/aboutpickleball'
import Paddles from '../pages/paddles'
import Login from '../pages/login'
import Register from '../pages/register'

// css
import '../css/navbar1.css'
import '../css/navbar2.css'

function App() {
  

  return (
    <>
      <div id='navBarContainer'>
        <NavBar1/>
        <NavBar2/>
      </div>
        <Routes>
          <Route path='/leagues' element={<Leagues/>}/>
          <Route path='/what-is-pickle-ball' element={<AboutPickleBall/>}/>
          <Route path='/paddles' element={<Paddles/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
        </Routes>
     

    </>
  )
}

export default App
