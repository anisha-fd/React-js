import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar'
import Products from './Components/Pages/Products'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from './Components/Pages/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Products></Products>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          
        </Routes>
       
        <Footer />

      </BrowserRouter>


    </>
  )
}

export default App
