import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Properties from './Components/Properties'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Login from './Components/Login'
import PropertiesDetails from './Components/PropertiesDetails'
import Register from './Components/Register'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/Properties' element={<Properties/>}></Route>
      <Route path='/PropertyDetails' element={<PropertiesDetails/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>


      </Routes>
       
      <Footer/>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  )
}

export default App
