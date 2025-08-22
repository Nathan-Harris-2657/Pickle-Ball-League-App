import { Route, Routes } from 'react-router-dom'
import './App.css'

// Components
import NavBar1 from '../components/NavBar'
import Logo from '../components/Logo'
import PickleballFacts from '../components/PickleballFacts'

// Pages
import Leagues from '../pages/leagues'
import AboutPickleBall from '../pages/aboutpickleball'
import Paddles from '../pages/paddles'
import Login from '../pages/login'
import Register from '../pages/register'
import Accessories from '../pages/accessories'

// css
import '../css/navbar1.css'
import '../css/logo.css'
import '../css/paddles.css'


function App() {
  

  return (
    <>
      <div id='logoContainer'>
        <Logo/>
      </div>


      <div id='navBarContainer'>
        <div id='navBarContainer2'>
          <NavBar1/>
        </div>
      </div>

      <div id='pickleBallFacts'>
        <PickleballFacts/>
      </div>
        <Routes>
          <Route path='/leagues' element={<Leagues/>}/>
          <Route path='/what-is-pickle-ball' element={<AboutPickleBall/>}/>
          <Route path='/paddles' element={<Paddles/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          
        </Routes>
     

    </>
  )
}

export default App
